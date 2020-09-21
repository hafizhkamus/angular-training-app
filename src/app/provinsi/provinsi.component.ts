import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-provinsi',
  templateUrl: './provinsi.component.html',
  styleUrls: ['./provinsi.component.scss']
})
export class ProvinsiComponent implements OnInit {

  form : FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      "kodeBps" : new FormControl(null, [Validators.required]),
      "namaProvinsi" : new FormControl(null, [Validators.required])
    });

  }

  save(): void{
    console.log(this.form.value);
  }

}
