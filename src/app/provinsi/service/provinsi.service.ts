import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Provinsi} from './provinsi';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProvinsiService {

  constructor(private _http : HttpClient) { }

  save(provinsi: Provinsi): Observable<any>{
    return this._http.post(environment.baseUrl +'/provinsi/save', provinsi)
    .pipe(map(data => data));
  }
}

