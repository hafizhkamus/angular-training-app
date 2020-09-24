import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ProvinsiService } from '../provinsi/service/provinsi.service';
import { Provinsi } from '../provinsi/service/provinsi';
import swal from 'sweetalert';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-provnisi-list',
  templateUrl: './provnisi-list.component.html',
  styleUrls: ['./provnisi-list.component.scss']
})
export class ProvnisiListComponent implements OnInit, OnDestroy{
  @ViewChild(DataTableDirective, {static: false})
  dtElement : DataTableDirective;
  dtOptions : any;
  dtTrigger : Subject<any> = new Subject();

  listProvinsi : Provinsi[];

  id : string;
  form : FormGroup;
  cari : FormGroup;

  constructor(private _service : ProvinsiService) { 

    this.form = new FormGroup({
      "kodeBps" : new FormControl(null, [Validators.required]),
      "namaProvinsi" : new FormControl(null, [Validators.required])
    });

  }

  ngOnInit(): void {

    this.cari = new FormGroup({
      namaProvinsi: new FormControl('')
    });

    // this._service.dataProv().subscribe( (data ) =>{
    //   this.listProvinsi = data
    // }, error => {
    //   swal("Cannot catch data", "data is invalid indeed", "error");
    // });

    const that = this;
    this.dtOptions = {
      ajax : (dataTablesParameters: any, callback) => {
        const parameters = new Map<string, any>();
        parameters.set('namaProvinsi', this.cari.controls.namaProvinsi.value)
        that._service.getALlProvinsi(parameters, dataTablesParameters).subscribe( resp => {
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
      data : 'namaProvinsi'
    },
    {
      title : 'action',
      orderable: false,
      render(data, type, row){
        return `<a href="editprovinsi/${row.kodeBps}" class="btn btn-dark btn-default edit" data-element-id="${row.kodeBps}">
        Edit</a>`;
      }
    },
    {
      title : 'delete',
      orderable: false,
      render(data, type, row){
        return `<a (onClick)="delete(${row.kodeBps})" class="btn btn-dark btn-default edit" data-element-id="${row.kodeBps}">
        Delete</a>`;
      }
    }],
    
    }

  }

  ngAfterViewInit(){

  }

  delete(id): any{
    this._service.deleteProv(id).subscribe((data) =>{
      swal("Data deleted", "data has been delete", "warning");
    }, error =>{
      swal("delete is doesn't work!!", "data cannot be delete", "error");
    });
  }

  ngOnDestroy(): void{
    this.dtTrigger.unsubscribe();
  }

  search(): void{
    this.dtElement.dtInstance.then((data: DataTables.Api)=> {
    data.draw();
     });
  }

}
