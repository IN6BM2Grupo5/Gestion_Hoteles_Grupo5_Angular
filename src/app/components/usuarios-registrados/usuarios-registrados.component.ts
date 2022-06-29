import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { usuarios } from 'src/app/models/usuarios.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios-registrados',
  templateUrl: './usuarios-registrados.component.html',
  styleUrls: ['./usuarios-registrados.component.scss'],
  providers: [UsuariosService]
})
export class UsuariosRegistradosComponent implements OnInit {
  public UsuariosModelGet: usuarios;

  constructor(
    private _UsuariosService: UsuariosService
  ) {  }

   getUsuarios(){
    this._UsuariosService.obtenerUsuarios(this._UsuariosService.obtenerToken()).subscribe(
      (response) => {
          this.UsuariosModelGet = response.usuarios;

          console.log(response.usuarios)
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.mensaje
        })
      }
    )
  }

  ngOnInit(): void {
    this.getUsuarios()
  }

}
