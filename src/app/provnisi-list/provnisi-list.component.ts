import { Component, OnInit } from '@angular/core';
import { ProvinsiService } from '../provinsi/service/provinsi.service';
import { Provinsi } from '../provinsi/service/provinsi';

@Component({
  selector: 'app-provnisi-list',
  templateUrl: './provnisi-list.component.html',
  styleUrls: ['./provnisi-list.component.scss']
})
export class ProvnisiListComponent implements OnInit {


  listProvinsi : Provinsi[];

  constructor(private _service : ProvinsiService) { }

  ngOnInit(): void {

    this._service.dataProv().subscribe( (data ) =>{
      this.listProvinsi = data
    }, error => {
      alert("cannot catch data");
    });

  }

  ngAfterViewInit(){

  }

}
