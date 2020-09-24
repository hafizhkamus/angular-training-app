import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Kecamatan } from './kecamatan';
import { Kabupaten } from '../../kabupaten/service/kabupaten';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators';
import { Datatablesrequest } from 'src/app/datatables/datatablesrequest.mode';
import { DataTablesResponse } from 'src/app/datatables/datatablesresponse.model';


@Injectable({
  providedIn: 'root'
})
export class KecamatanService {

  constructor( private _http : HttpClient) { }

  insertKecamatan(kecamatan : Kecamatan): Observable<any>{
    return this._http.post(environment.baseUrl +'/kecamatan/save', kecamatan)
    .pipe(map(data => data));
 }

 dataKec(): Observable<Kecamatan[]>{
  return this._http.get(environment.baseUrl +'/listkecamatanjson')
  .pipe(map(data => <Kecamatan[]> data));
}

dataKecById(id): Observable<Kecamatan>{
  return this._http.get(environment.baseUrl +'/kecamatandetails/'+id)
  .pipe(map(data => data as Kecamatan));
}

dataKabsById(idProv): Observable<Kabupaten[]>{
  return this._http.get(environment.baseUrl +'/listkabupaten/'+ idProv)
  .pipe(map(data => data as Kabupaten[]));
}

getAllKecamatan(parameter: Map<string, any>, datatableParameters: any): Observable<DataTablesResponse>{
  const param = new Datatablesrequest();
  param.draw = datatableParameters.draw;
  param.length = datatableParameters.length;
  param.start = datatableParameters.start;
  param.sortCol = datatableParameters.order[0].column;
  param.sortDir = datatableParameters.order[0].dir;

  parameter.forEach((value, key) =>{
    param.extraParam[key]= value ;
  });
  return this._http.post(environment.baseUrl +'/listkecamatandatatable/', param)
  .pipe(map(data => data as DataTablesResponse));
}

}
