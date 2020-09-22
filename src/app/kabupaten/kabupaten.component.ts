import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { KabupatenService } from './service/kabupaten.service';
import { ProvinsiService } from '../provinsi/service/provinsi.service';
import { Kabupaten } from './service/kabupaten';
import { Provinsi } from '../provinsi/service/provinsi';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-kabupaten',
  templateUrl: './kabupaten.component.html',
  styleUrls: ['./kabupaten.component.scss']
})
export class KabupatenComponent implements OnInit {

  id : string;

  form : FormGroup;

  // listKab : Kabupaten[];

  listProvinsi : Provinsi[];

  listKab : Kabupaten[];

  constructor(private _service : KabupatenService , private service : ProvinsiService, private _router : Router, private activateRouter : ActivatedRoute) {
    this.form = new FormGroup({
      "kodeBps" : new FormControl(null, [Validators.required]),
      "namaKabupaten" : new FormControl(null, [Validators.required]),
      "kodeProvinsi" : new FormControl(null, [Validators.required])
    });

    this.service.dataProv().subscribe( (data ) =>{
      this.listProvinsi = data
    }, error => {
      swal("cannot catch data", "data error", "error");
    });

    this._service.dataKab().subscribe( (data ) =>{
      this.listKab = data
    }, error => {
      swal("cannot catch data","data error", "error");
    });
   
   }

  ngOnInit(): void {
    this.activateRouter.params.subscribe( rute => {
      this.id = rute.id;
      this._service.dataKabsById(this.id).subscribe( data => {
        this.form.get("kodeBps").setValue( data.kodeBps);
        this.form.get("namaKabupaten").setValue(data.namaKabupaten);
        this.form.get("kodeProvinsi").setValue(data.kodeProvinsi);
      }, error => {
        swal("data kosong");
      });
    });
  }

  save(): void{
    console.log(this.form.value);
    const kabs = new Kabupaten();
    kabs.kodeBps = this.form.value.kodeBps;
    kabs.namaKabupaten = this.form.value.namaProvinsi;
    kabs.kodeProvinsi = this.form.value.kodeProvinsi;
    const prov = new Provinsi();
    prov.kodeBps = this.form.value.provinsi;
    prov.namaProvinsi = this.form.value.provinsi;
    this._service.insertKabupaten(kabs).subscribe((data) => {
      console.log(data);
      swal("Data Saved", "list kabupaten has been updated", "success");
      this._router.navigate(["/list-kabupaten"]);
    }, error => {
      swal("cannot input data", "your data is invalid", "error");
    });
  }


}
