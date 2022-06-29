import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { usuarios } from 'src/app/models/usuarios.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UsuariosService]
})
export class LoginComponent implements OnInit {
  public usuarioModel: usuarios;

  constructor(
    private _UsuariosService: UsuariosService,
    private _router: Router
  ) {
    this.usuarioModel = new usuarios(
      "",
      "",
      "",
      "",
      "",
      [{
        descripcion: "",
        precio: 0
      }]
    )
  }

  ngOnInit(): void {
  }

  getToken(){
    this._UsuariosService.login(this.usuarioModel, "true").subscribe(
      (response)=>{
        console.log(response);
        localStorage.setItem("token", response.token)

      },
      (error)=>{
        console.log(<any>error);

      }
    )
  }

  getTokenPromesa(): Promise<any> {
    return new Promise((resolve, reject)=>{
      this._UsuariosService.login(this.usuarioModel, "true").subscribe(
        (response)=>{
          // console.log(response);
          localStorage.setItem("token", response.token)
          resolve(response);
        },
        (error)=>{
          console.log(<any>error);

        }
      )
    })
  }


  login(){
    this._UsuariosService.login(this.usuarioModel, "false").subscribe(
      (response)=>{
        this.getTokenPromesa().then(respuesta=>{
          localStorage.setItem("identidad", JSON.stringify(response.usuario))

          if(this._UsuariosService.obtenerIdentidad().rol=="Admin_APP"){
            this._router.navigate(['/admin/usuarios-registrados']);
          }else if(this._UsuariosService.obtenerIdentidad().rol=="Cliente"){
            this._router.navigate(['/usuario/hoteles-usuario']);
          }else{
            this._router.navigate(['/hotel/reservaciones']);
          }

        })

      },
      (error)=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.mensaje
        })
      }
    )
  }


}
