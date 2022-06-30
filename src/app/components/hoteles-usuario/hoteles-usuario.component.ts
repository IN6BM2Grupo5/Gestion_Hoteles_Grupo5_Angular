import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { hoteles } from 'src/app//models/hoteles.model'
import { HotelesService } from 'src/app/services/hoteles.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hoteles-usuario',
  templateUrl: './hoteles-usuario.component.html',
  styleUrls: ['./hoteles-usuario.component.scss'],
  providers: [UsuariosService, HotelesService]
})
export class HotelesUsuarioComponent implements OnInit {
  public HotelesModelGet: hoteles;
  constructor(  private _UsuariosService: UsuariosService,
    private _HotelesService: HotelesService) { }

  ngOnInit(): void {
    this.getHoteles()
  }


  getHoteles(){
    this._HotelesService.obtenerHoteles(this._UsuariosService.obtenerToken()).subscribe(
      (response) => {
          this.HotelesModelGet = response.hoteles;
          for(let i = 0; i < response.hoteles.length; i++) {
            this._UsuariosService.obtenerUsuariosId(this.HotelesModelGet[i].idUsuario, this._UsuariosService.obtenerToken()).subscribe(
              (responseUsuario) => {
                this.HotelesModelGet[i].usuario = responseUsuario.usuario.usuario;
                console.log(this.HotelesModelGet[i])
              }
            )

          }

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
}
