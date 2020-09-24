import { Component, OnInit, ViewChild } from '@angular/core';
import { Kecamatan } from '../service/kecamatan';
import { KecamatanService } from '../service/kecamatan.service';
import swal from 'sweetalert';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-kecamatan-list',
  templateUrl: './kecamatan-list.component.html',
  styleUrls: ['./kecamatan-list.component.scss']
})
export class KecamatanListComponent implements OnInit {

  @ViewChild(DataTableDirective, {static: false})
  dtElement : DataTableDirective;
  dtOptions : any;
  dtTrigger : Subject<any> = new Subject();
  // listKab : Kabupaten[];

  listKec : Kecamatan[];

  constructor( private _service : KecamatanService) { }

  ngOnInit(): void {

    // this._service.dataKec().subscribe( (data ) =>{
    //   this.listKec = data
    // }, error => {
    //   swal("cannot catch data", "data is invalid indeed", "error");
    // });

    const that = this;
    this.dtOptions = {
      ajax : (dataTablesParameters: any, callback) => {
        const parameters = new Map<string, any>();
        that._service.getAllKecamatan(parameters, dataTablesParameters).subscribe( resp => {
          callback({
            recordsTotal : resp.recordsTotal,
            recordsFiltered : resp.recordFiltered,
            data : resp.data,
            draw : resp.draw
          });
        });
      },
      serverSide : true,
      processing : true,
      filter : false,
      columns: [{
        title : 'ID',
        data : 'idKecamatan',
        orderable : false
      },
    {
      title: 'nama',
      data : 'namaKabupaten'
    },
    {
      title : 'kabupaten',
      data: 'namaKabupaten'
    },
    {
      title : 'provinsi',
      data: 'namaProvinsi'
    },
    {
      title : 'action',
      orderable: false,
      render(data, type, row){
        return `<a routerLink="editkabupaten/${row.kodeBps}" class="btn btn-light btn-default edit" data-element-id="${row.kodeBps}">
        <i class="glyphicon glyphicon-edit"><i></a>`;
      }
    }],
    rowCallback(row, data, dataIndex) {
      const idx = ((this.api().page()) *this.api().page.len()) + dataIndex + 1;
      $('td:eq(0)', row).html('<b>'+idx+'<b>');
    }
    }


  }

}
