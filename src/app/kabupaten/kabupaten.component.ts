import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { KabupatenService } from './service/kabupaten.service';
import { ProvinsiService } from '../provinsi/service/provinsi.service';
import { Kabupaten } from './service/kabupaten';
import { Provinsi } from '../provinsi/service/provinsi';

@Component({
  selector: 'app-kabupaten',
  templateUrl: './kabupaten.component.html',
  styleUrls: ['./kabupaten.component.scss']
})
export class KabupatenComponent implements OnInit {

  form : FormGroup;

  // listKab : Kabupaten[];

  listProvinsi : Provinsi[];

  constructor(private _service : KabupatenService , private service : ProvinsiService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      "kodeBps" : new FormControl(null, [Validators.required]),
      "namaKabupaten" : new FormControl(null, [Validators.required]),
      "kodeProvinsi" : new FormControl(null, [Validators.required])
    });

    this.service.dataProv().subscribe( (data ) =>{
      this.listProvinsi = data
    }, error => {
      alert("cannot catch data");
    });

    // this._service.dataKab().subscribe( (data ) =>{
    //   this.listKab = data
    // }, error => {
    //   alert("cannot catch data");
    // });
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
      alert("insert success");
    }, error => {
      alert("cannot input data");
    });
  }

}
