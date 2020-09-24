import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Kabupaten } from './kabupaten';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators';
import { DataTablesResponse } from 'src/app/datatables/datatablesresponse.model';
import { Datatablesrequest } from 'src/app/datatables/datatablesrequest.mode';

@Injectable({
  providedIn: 'root'
})
export class KabupatenService {

  constructor(private _http: HttpClient) {
   }

   insertKabupaten(kabupaten : Kabupaten): Observable<any>{
      return this._http.post(environment.baseUrl +'/kabupaten/save', kabupaten)
      .pipe(map(data => data));
   }

   dataKab(): Observable<Kabupaten[]>{
    return this._http.get(environment.baseUrl +'/listkabupatenjson')
    .pipe(map(data => <Kabupaten[]> data));
  }

  dataKabsById(id): Observable<Kabupaten>{
    return this._http.get(environment.baseUrl +'/kabupatendetails/'+id)
    .pipe(map(data => data as Kabupaten));
  }

  getAllKabupaten(parameter: Map<string, any>, datatableParameters: any): Observable<DataTablesResponse>{
    const param = new Datatablesrequest();
    param.draw = datatableParameters.draw;
    param.length = datatableParameters.length;
    param.start = datatableParameters.start;
    param.sortCol = datatableParameters.order[0].column;
    param.sortDir = datatableParameters.order[0].dir;

    parameter.forEach((value, key) =>{
      param.extraParam[key]= value ;
    });
    return this._http.post(environment.baseUrl +'/listkabupatendatatable/', param)
    .pipe(map(data => data as DataTablesResponse));
  }

}
