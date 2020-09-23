import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Kecamatan } from './kecamatan';
import { Kabupaten } from '../../kabupaten/service/kabupaten';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators';


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
  return this._http.get(environment.baseUrl +'/kabupatendetails/'+id)
  .pipe(map(data => data as Kecamatan));
}

dataKabsById(idProv): Observable<Kabupaten[]>{
  return this._http.get(environment.baseUrl +'/listkabupaten/'+ idProv)
  .pipe(map(data => data as Kabupaten[]));
}
}
