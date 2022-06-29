import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { usuarios } from '../models/usuarios.model'

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {
  public url: String = 'http://localhost:3000/api';
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public identidad;
  public token;

  constructor(public _http: HttpClient) { }

  login(usuario, obtenerToken = null): Observable<any> {

    if(obtenerToken != null){
      usuario.obtenerToken = obtenerToken;
    }

    let params = JSON.stringify(usuario);

    return this._http.post(this.url + '/login', params, {headers: this.headersVariable});
  }

  registrarse(modeloUsuario: usuarios): Observable<any>{
    let parametros = JSON.stringify(modeloUsuario);

    return this._http.post(this.url+'/registrar', parametros, {headers: this.headersVariable})
  }


  obtenerToken(){
    var token2 = localStorage.getItem("token");
    if(token2 != undefined){
      this.token = token2;
    } else {
      this.token = '';
    }

    return this.token;
  }

  obtenerIdentidad(){
    var identidad2 = JSON.parse(localStorage.getItem('identidad'));
    if(identidad2 != undefined){
      this.identidad = identidad2;
    } else {
      this.identidad = null;
    }

    return this.identidad;
  }

  obtenerUsuarios(token): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token)

    return this._http.get(this.url + '/usuarios', { headers: headersToken })
  }

  obtenerUsuariosId(id : String, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization',token)

    return this._http.get(this.url + '/usuarioId/' + id, { headers: headersToken  })
  }

  editarUsuario(modeloUsuario: usuarios, token): Observable<any>{
    let parametros = JSON.stringify(modeloUsuario);
    let headersToken = this.headersVariable.set('Authorization', token)

    return this._http.put(this.url+'/editarUsuario/'+modeloUsuario._id, parametros, {headers: headersToken})
  }

  eliminarUsuario(id : String, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization',token)

    return this._http.delete(this.url + '/eliminarUsuario/' + id, { headers: headersToken })
  }


}
