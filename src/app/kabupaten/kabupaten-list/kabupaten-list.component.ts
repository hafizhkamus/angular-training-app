import { Component, OnInit } from '@angular/core';
import { KabupatenService } from '../service/kabupaten.service';
import { Kabupaten } from '../service/kabupaten';

@Component({
  selector: 'app-kabupaten-list',
  templateUrl: './kabupaten-list.component.html',
  styleUrls: ['./kabupaten-list.component.scss']
})
export class KabupatenListComponent implements OnInit {

  listKab : Kabupaten[];

  constructor(private _service : KabupatenService) { }

  ngOnInit(): void {
    
    this._service.dataKab().subscribe( (data ) =>{
      this.listKab = data
    }, error => {
      alert("cannot catch data");
    });

  }

  ngAfterViewInit(){

  }
}
