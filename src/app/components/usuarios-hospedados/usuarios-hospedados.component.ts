import { Component, OnInit } from '@angular/core';
import { HotelesService } from 'src/app/services/hoteles.service'
import { UsuariosService } from 'src/app/services/usuarios.service';
import { usuarios } from 'src/app/models/usuarios.model';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-usuarios-hospedados',
  templateUrl: './usuarios-hospedados.component.html',
  styleUrls: ['./usuarios-hospedados.component.scss'],
  providers: [UsuariosService, HotelesService]
})
export class UsuariosHospedadosComponent implements OnInit {
  public UsuariosModelGet: usuarios;
  constructor(    private _UsuariosService: UsuariosService,     private _HotelesService: HotelesService) { }


  getUsuarios(){
    this._HotelesService.obtenerUsuariosHospedados(this._UsuariosService.obtenerToken()).subscribe(
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

  getUsuariosNombre(nombre){
    if(nombre){
      this._UsuariosService.obtenerUsuariosNombreHotel(nombre, this._UsuariosService.obtenerToken()).subscribe(
        (response) => {
            this.UsuariosModelGet = response.usuarios;

            console.log(response.usuarios)
        },
        (error) => {
          this.getUsuarios();
        }
      )
    }else{
      this.getUsuarios();
    }

  }

  ngOnInit(): void {
    this.getUsuarios()
  }

}
