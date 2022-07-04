import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { eventos } from '../models/eventos.model';
import { habitaciones } from '../models/habitaciones.model';
import { hoteles } from '../models/hoteles.model'
import { servicios } from '../models/servicios.model';

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

  obtenerHotelId(id: String, token): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token)

    return this._http.get(this.url + '/hotelId/'+id, { headers: headersToken })
  }

  obtenerHotelIdAdmin(id: String, token): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token)

    return this._http.get(this.url + '/hotelesPorAdmin/'+id, { headers: headersToken })
  }


  obtenerHabitaciones(token, id?:String): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token)
    if(id==undefined){
      id = ""
    }
    return this._http.get(this.url + '/habitaciones/'+id, { headers: headersToken })
  }


  obtenerEventos(token, id?:String): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token)
    if(id==undefined){
      id = ""
    }
    return this._http.get(this.url + '/eventos/'+id, { headers: headersToken })
  }

  agregarHabitacion(modeloHabitacion: habitaciones, id : String, token): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token)
    let parametros = JSON.stringify(modeloHabitacion);
    return this._http.post(this.url + '/agregarHabitacion/'+ id, parametros, { headers: headersToken })
  }

  obtenerServicios(token, id?:String): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token)
    if(id==undefined){
      id = ""
    }
    return this._http.get(this.url + '/servicios/'+id, { headers: headersToken })
  }

  agregarServicio(modeloServicio: servicios, id : String, token): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token)
    let parametros = JSON.stringify(modeloServicio);
    return this._http.post(this.url + '/agregarServicio/'+ id, parametros, { headers: headersToken })
  }


  obtenerHotelesNombre(nombre, token): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token)

    return this._http.get(this.url + '/hotelesPorNombre/'+nombre, { headers: headersToken })
  }

  agregarEvento(modeloEvento: eventos, id : String, token): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token)
    let parametros = JSON.stringify(modeloEvento);
    return this._http.post(this.url + '/agregarEvento/'+ id, parametros, { headers: headersToken })
  }


}
