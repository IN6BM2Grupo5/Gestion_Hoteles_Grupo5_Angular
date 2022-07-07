import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { hoteles } from 'src/app//models/hoteles.model'
import { HotelesService } from 'src/app/services/hoteles.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hoteles-generales',
  templateUrl: './hoteles-generales.component.html',
  styleUrls: ['./hoteles-generales.component.scss']
})
export class HotelesGeneralesComponent implements OnInit {
  public HotelesModelGet: hoteles;
  constructor(  private _UsuariosService: UsuariosService,
    private _HotelesService: HotelesService) { }

  ngOnInit(): void {
    this.getHoteles()
  }


  getHoteles(){
    this._HotelesService.obtenerHoteles("").subscribe(
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

  getHotelesNombre(nombre){
    if(nombre){
        this._HotelesService.obtenerHotelesNombre(nombre,  "").subscribe(
          (response)=>{
            this.HotelesModelGet = response.hoteles;
            console.log(this.HotelesModelGet);
          },
          (error)=>{
            this.getHoteles();
          }
        )
    }else{
      this.getHoteles();
    }

  }

}

