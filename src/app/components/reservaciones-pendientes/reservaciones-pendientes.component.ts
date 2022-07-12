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
  public total;

  constructor(
    private _HotelesService: HotelesService,
    private _UsuariosService: UsuariosService
  ) { }


  getCuenta(){
    this._HotelesService.obtenerCuenta(this._UsuariosService.obtenerToken()).subscribe(
      (response) => {
        console.log(response);
          this.UsuariosModelGet = response.cuenta;
          this.total = 0;
          for (let i = 0; i < response.cuenta.length; i++) {
            console.log(response.cuenta[i].precio)
            this.total = this.total + response.cuenta[i].precio
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


  getHabitacionesRegistradas(){
    this._HotelesService.obtenerHabitacionesRegistradas(this._UsuariosService.obtenerToken()).subscribe(
      (response) => {
        console.log(response);
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

  stringAsDate(dateStr: string) {
      return new Date(dateStr);
  }

  cancelarReserva(descripcion, idReserva){
    this._HotelesService.cancelar(descripcion, idReserva, this._UsuariosService.obtenerToken()).subscribe(
      (response)=>{
        console.log(response);
        this.getCuenta()
        Swal.fire({
          icon: 'success',
          title: 'Reserva cancelada',
          text: "Reserva cancelada exitosamente"
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

confirmarReserva(){
  this._HotelesService.confirmarCuenta(this._UsuariosService.obtenerToken()).subscribe(
    (response)=>{
      console.log(response);
      Swal.fire({
        icon: 'success',
        title: 'Reserva confirmada',
        text: "Reserva confirmada exitosamente"
      })
      this.getCuenta()
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



  ngOnInit(): void {
    this.getHabitacionesRegistradas()
    this.getCuenta()
  }

}
