import { Component, OnInit } from '@angular/core';
import { Kecamatan } from '../service/kecamatan';
import { KecamatanService } from '../service/kecamatan.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-kecamatan-list',
  templateUrl: './kecamatan-list.component.html',
  styleUrls: ['./kecamatan-list.component.scss']
})
export class KecamatanListComponent implements OnInit {

  listKec : Kecamatan[];

  constructor( private _service : KecamatanService) { }

  ngOnInit(): void {

    this._service.dataKec().subscribe( (data ) =>{
      this.listKec = data
    }, error => {
      swal("cannot catch data", "data is invalid indeed", "error");
    });

  }

}
