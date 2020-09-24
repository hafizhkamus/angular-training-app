import { Component, OnInit, ViewChild } from '@angular/core';
import { KabupatenService } from '../service/kabupaten.service';
import { Kabupaten } from '../service/kabupaten';
import swal from 'sweetalert';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { ProvinsiService } from '../../provinsi/service/provinsi.service';

@Component({
  selector: 'app-kabupaten-list',
  templateUrl: './kabupaten-list.component.html',
  styleUrls: ['./kabupaten-list.component.scss']
})
export class KabupatenListComponent implements OnInit {
  @ViewChild(DataTableDirective, {static: false})
  dtElement : DataTableDirective;
  dtOptions : any;
  dtTrigger : Subject<any> = new Subject();
  // listKab : Kabupaten[];

  constructor(private _service : KabupatenService, private serviceProv : ProvinsiService) { }

  ngOnInit(): void {
    
    // this._service.dataKab().subscribe( (data ) =>{
    //   this.listKab = data
    // }, error => {
    //   swal("Cannot catch data", "data is invalid indeed", "error");
    // });

    const that = this;
    this.dtOptions = {
      ajax : (dataTablesParameters: any, callback) => {
        const parameters = new Map<string, any>();
        that._service.getAllKabupaten(parameters, dataTablesParameters).subscribe( resp => {
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
        data : 'kodeBps',
        orderable : false
      },
    {
      title: 'nama',
      data : 'namaKabupaten'
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

  ngAfterViewInit(){

  }
}
