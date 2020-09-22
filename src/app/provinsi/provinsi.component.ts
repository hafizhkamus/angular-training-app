import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ProvinsiService} from './service/provinsi.service';
import {Provinsi} from './service/provinsi';

@Component({
  selector: 'app-provinsi',
  templateUrl: './provinsi.component.html',
  styleUrls: ['./provinsi.component.scss'],
  providers : [ProvinsiService]
})
export class ProvinsiComponent implements OnInit {

  form : FormGroup;

  constructor(private _service : ProvinsiService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      "kodeBps" : new FormControl(null, [Validators.required]),
      "namaProvinsi" : new FormControl(null, [Validators.required])
    });

  }

  save(): void{
    console.log(this.form.value);
    const prov = new Provinsi();
    prov.kodeBps = this.form.value.kodeBps;
    prov.namaProvinsi = this.form.value.namaProvinsi;
    this._service.insertProv(prov).subscribe((data) => {
      console.log(data);
    });
  }

}
