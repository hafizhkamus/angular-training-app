import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Kabupaten } from './kabupaten';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators';

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

}
