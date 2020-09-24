import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Provinsi} from './provinsi';
import {map} from 'rxjs/operators';
import {DataTablesResponse} from '../../datatables/datatablesresponse.model';
import { data } from 'jquery';
import {Datatablesrequest} from '../../datatables/datatablesrequest.mode';

@Injectable({
  providedIn: 'root'
})
export class ProvinsiService {

  constructor(private _http : HttpClient) { }

  insertProv(provinsi: Provinsi): Observable<any>{
    return this._http.post(environment.baseUrl +'/provinsi/save', provinsi)
    .pipe(map(data => data));
  }

  deleteProv(id): Observable<Provinsi>{
    return this._http.delete(environment.baseUrl +'/provinsi-deleted/'+id)
    .pipe(map(data => data as Provinsi));
  }

  dataProv(): Observable<Provinsi[]>{
    return this._http.get(environment.baseUrl +'/list-provinsi')
    .pipe(map(data => <Provinsi[]> data));
  }

  dataNamaProv(): Observable<Provinsi[]>{
    return this._http.get(environment.baseUrl +'/list-nama-provinsi')
    .pipe(map(data => <Provinsi[]> data));
  }

  dataProvById(id): Observable<Provinsi>{
    return this._http.get(environment.baseUrl +'/provinsidetails/'+id)
    .pipe(map(data => data as Provinsi));
  }

  getALlProvinsi(parameter: Map<string, any>, datatableParameters: any): Observable<DataTablesResponse>{
    const param = new Datatablesrequest();
    param.draw = datatableParameters.draw;
    param.length = datatableParameters.length;
    param.start = datatableParameters.start;
    param.sortCol = datatableParameters.order[0].column;
    param.sortDir = datatableParameters.order[0].dir;
    param.extraParam = {};
    parameter.forEach((value, key) =>{
      param.extraParam[key]= value ;
    });
    return this._http.post(environment.baseUrl +'/listprvinsidatatable/', param)
    .pipe(map(data => data as DataTablesResponse));
  }

}


