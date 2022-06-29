import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { hoteles } from '../models/hoteles.model'

@Injectable({
  providedIn: 'root'
})
export class HotelesService {
  public url: String = 'http://localhost:3000/api';
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(public _http: HttpClient) { }

  agregarHotel(modeloHotel: hoteles, token): Observable<any>{
    let parametros = JSON.stringify(modeloHotel);
    let headersToken = this.headersVariable.set('Authorization', token)
    return this._http.post(this.url+'/agregarHotel', parametros, {headers: headersToken})
  }

  obtenerHoteles(token): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token)

    return this._http.get(this.url + '/hoteles', { headers: headersToken })
  }

}
