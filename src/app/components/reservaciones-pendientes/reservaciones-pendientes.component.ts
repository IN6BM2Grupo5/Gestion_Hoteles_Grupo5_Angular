import { Component, OnInit } from '@angular/core';
import { HotelesService } from 'src/app/services/hoteles.service'
import { UsuariosService } from 'src/app/services/usuarios.service';
import { usuarios } from 'src/app/models/usuarios.model';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-reservaciones-pendientes',
  templateUrl: './reservaciones-pendientes.component.html',
  styleUrls: ['./reservaciones-pendientes.component.scss'],
  providers: [HotelesService, UsuariosService]
})
export class ReservacionesPendientesComponent implements OnInit {
  public UsuariosModelGet: usuarios;

  constructor(
    private _HotelesService: HotelesService,
    private _UsuariosService: UsuariosService
  ) { }


  getCuenta(){
    this._HotelesService.obtenerCuenta(this._UsuariosService.obtenerToken()).subscribe(
      (response) => {
          this.UsuariosModelGet = response.cuenta;
          console.log(response.cuenta);
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
    this.getCuenta()
  }

}
