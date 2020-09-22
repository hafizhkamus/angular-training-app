import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ProvinsiService} from './service/provinsi.service';
import {Provinsi} from './service/provinsi';
import { Router, ActivatedRoute } from '@angular/router';
import { data } from 'jquery';
import swal from 'sweetalert';

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
        swal("Data Empty");
      });
    });

  }

  save(): void{
    console.log(this.form.value);
    const prov = new Provinsi();
    prov.kodeBps = this.form.value.kodeBps;
    prov.namaProvinsi = this.form.value.namaProvinsi;
    this._service.insertProv(prov).subscribe((data) => {
      swal("Data Saved!", "list-provinsi has been deleted", "success");
      this._router.navigate(["/list-provinsi"]);
    }, error => {
      swal("Cannot insert data", "your data in unable to save", "error");
    });
  }

}
