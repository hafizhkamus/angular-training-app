import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ProvinsiService} from './service/provinsi.service';
import {Provinsi} from './service/provinsi';
import { Router, ActivatedRoute } from '@angular/router';
import { data } from 'jquery';

@Component({
  selector: 'app-provinsi',
  templateUrl: './provinsi.component.html',
  styleUrls: ['./provinsi.component.scss'],
  providers : [ProvinsiService]
})
export class ProvinsiComponent implements OnInit {

  id : string;
  form : FormGroup;

  constructor(private _service : ProvinsiService, private _router : Router, private activateRouter: ActivatedRoute) { 
    this.form = new FormGroup({
      "kodeBps" : new FormControl(null, [Validators.required]),
      "namaProvinsi" : new FormControl(null, [Validators.required])
    });
  }

  ngOnInit(): void {

    this.activateRouter.params.subscribe( rute => {
      this.id = rute.id;
      this._service.dataProvById(this.id).subscribe( data => {
        this.form.get("kodeBps").setValue( data.kodeBps);
        this.form.get("namaProvinsi").setValue(data.namaProvinsi);
      }, error => {
        alert("data kosong");
      });
    });

  }

  save(): void{
    console.log(this.form.value);
    const prov = new Provinsi();
    prov.kodeBps = this.form.value.kodeBps;
    prov.namaProvinsi = this.form.value.namaProvinsi;
    this._service.insertProv(prov).subscribe((data) => {
      console.log(data);
      this._router.navigate(["/list-provinsi"]);
    }, error => {
      alert("cannot input data");
    });
  }

}
