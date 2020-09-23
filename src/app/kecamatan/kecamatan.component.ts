import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { KecamatanService } from './service/kecamatan.service';
import { Kecamatan } from './service/kecamatan';
import { ProvinsiService } from '../provinsi/service/provinsi.service';
import { Provinsi } from '../provinsi/service/provinsi';
import { Kabupaten } from '../kabupaten/service/kabupaten';
import { KabupatenService } from '../kabupaten/service/kabupaten.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-kecamatan',
  templateUrl: './kecamatan.component.html',
  styleUrls: ['./kecamatan.component.scss'],
  providers: [KecamatanService, ProvinsiService]
})
export class KecamatanComponent implements OnInit {


  id : string;

  listProv : Provinsi[];

  form : FormGroup;

  listKec : Kecamatan[];

  listKab : Kabupaten[];

  constructor( 
    private _service : KecamatanService,
    private serviceProv : ProvinsiService, 
    private activateRouter : ActivatedRoute,
    private _router : Router,
    private serviceKabs : KabupatenService) { 

      this.form = new FormGroup({
        "idKecamatan" : new FormControl(null, [Validators.required]),
        "namaKecamatan" : new FormControl(null, [Validators.required]),
        "kodeKabupaten" : new FormControl(null, [Validators.required]),
        "idProvinsi" : new FormControl(null, [Validators.required])
      });
  
      this.serviceProv.dataProv().subscribe( (data ) =>{
        this.listProv = data
      }, error => {
        swal("cannot catch data", "data error", "error");
      });

      // this.serviceKabs.dataKab().subscribe( (data ) =>{
      //   this.listKab = data
      // }, error => {
      //   swal("cannot catch data", "data error", "error");
      // });
  
      this._service.dataKec().subscribe( (data ) =>{
        this.listKec = data
      }, error => {
        swal("cannot catch data","data error", "error");
      });

    }

  ngOnInit(): void {

    this.activateRouter.params.subscribe( rute => {
      this.id = rute.id;
      this._service.dataKecById(this.id).subscribe( data => {
        this.form.get("idKecamatan").setValue( data.idKecamatan);
        this.form.get("namaKecamatan").setValue(data.namaKecamatan);
        this.form.get("kodeKabupaten").setValue(data.kodeKabupaten);
        this.form.get("idProvinsi").setValue(data.idProvinsi);
      }, error => {
        swal("data kosong");
      });
    });
  }

  save(): void{
    console.log(this.form.value);
    const kabs = new Kecamatan();
    kabs.idKecamatan = this.form.value.idKecamatan;
    kabs.namaKecamatan = this.form.value.namaKecamatan;
    kabs.kodeKabupaten = this.form.value.kodeKabupaten;
    this._service.insertKecamatan(kabs).subscribe((data) => {
      console.log(data);
      swal("Data Saved", "list kecamatan has been updated", "success");
      this._router.navigate(["/list-kecamatan"]);
    }, error => {
      swal("cannot input data", "your data is invalid", "error");
    });
  }

  ambilKabupaten(): void{
    const idProv = this.form.get("idProvinsi").value;
    this._service.dataKabsById(idProv).subscribe( data => {
      this.listKab = data;
    })
  }

}
