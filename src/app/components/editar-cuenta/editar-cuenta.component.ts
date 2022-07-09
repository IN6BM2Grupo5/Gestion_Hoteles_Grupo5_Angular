import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { usuarios } from 'src/app/models/usuarios.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editar-cuenta',
  templateUrl: './editar-cuenta.component.html',
  styleUrls: ['./editar-cuenta.component.scss'],
  providers: [ UsuariosService ]
})
export class EditarCuentaComponent implements OnInit {

  public UsuariosModelGetId: usuarios;

  constructor(public _UsuariosService: UsuariosService, private _router: Router) {
    this.UsuariosModelGetId =  new usuarios(
      "",
      "",
      "",
      "",
      "",
      [{
        descripcion: "",
        precio: 0,
        fechaInicio: "",
        fechaFin: ""
      }]
    )
  }

  ngOnInit(): void {
    this.getUsuariosId(this._UsuariosService.obtenerIdentidad()._id);
  }

  getUsuariosId(idUsuario){
    this._UsuariosService.obtenerUsuariosId(idUsuario, this._UsuariosService.obtenerToken()).subscribe(
      (response)=>{
        this.UsuariosModelGetId = response.usuario;
        console.log(this.UsuariosModelGetId )
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

  putUsuarios(){
    this._UsuariosService.editarUsuario(this.UsuariosModelGetId, this._UsuariosService.obtenerToken()).subscribe(
      (response)=>{
        console.log(response);
        Swal.fire({
          icon: 'success',
          title: 'Editado Correctamente',
          text: "su usario ha sido editado de manera satisfactoria"
        })
        localStorage.setItem("identidad", JSON.stringify(response.usuario));
        this.ngOnInit();
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

  deleteUsuarios(){
    this._UsuariosService.eliminarUsuario(this._UsuariosService.obtenerIdentidad()._id, this._UsuariosService.obtenerToken()).subscribe(
      (response)=>{
        console.log(response);
        Swal.fire({
          icon: 'success',
          title: '',
          text: "su usuario se ha eliminado exitosamente"
        })
        localStorage.clear();
        this._router.navigate(['/inicio']);
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
