import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelesService } from 'src/app/services/hoteles.service';
import { habitaciones } from 'src/app/models/habitaciones.model';
import Swal from 'sweetalert2'
import { UsuariosService } from 'src/app/services/usuarios.service';
import { servicios } from 'src/app/models/servicios.model';
import { eventos } from 'src/app/models/eventos.model';
import { reservas } from 'src/app/models/reservas.model';
@Component({
  selector: 'app-habitaciones-usuario',
  templateUrl: './habitaciones-usuario.component.html',
  styleUrls: ['./habitaciones-usuario.component.scss'],
  providers: [HotelesService, UsuariosService]
})
export class HabitacionesUsuarioComponent implements OnInit {
  public habitacionesModelGet: habitaciones;
  public reservar: reservas;
  public pedir: reservas;
  public serviciosModelGet: servicios;
  public token;
  public eventosModelGet: eventos;
  public nombreHotel: string;
  public idHabitacion: String;
  public idServicio: String;
  constructor( public _activatedRoute : ActivatedRoute,
    public _HotelesService : HotelesService,
    public _UsuariosService : UsuariosService) {
      this.reservar = new reservas("", "", "", "", 0, "", "", "")
      this.pedir = new reservas("", "", "", "", 0, "", "", "")
     }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta) => {
      this.getHotelNombre(dataRuta.get('idHotel'))
      this.getHabitaciones(dataRuta.get('idHotel'))
      this.getServicios(dataRuta.get('idHotel'))
      this.getEventos(dataRuta.get('idHotel'))
    })
  }

  getHotelNombre(idHotel){
    this._HotelesService.obtenerHotelId(idHotel,this._UsuariosService.obtenerToken()).subscribe(
      (response) => {
        console.log(response.hotel)
          this.nombreHotel = response.hotel.nombreHotel;
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

  Reservar(ReservaForm){
      this._HotelesService.ReservarHabitacion(this.reservar, this.idHabitacion, this._UsuariosService.obtenerToken()).subscribe(
        (response)=>{
          console.log(response);
          Swal.fire({
            icon: 'success',
            title: 'Reserva exitosa',
            text: "habitación reservada exitosamente"
          })
          ReservaForm.reset()
          this.idHabitacion = ""
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

  Pedir(PedirForm){
    this._HotelesService.pedirServicio(this.pedir, this.idServicio, this._UsuariosService.obtenerToken()).subscribe(
      (response)=>{
        console.log(response);
        Swal.fire({
          icon: 'success',
          title: 'petición exitosa',
          text: "servicio pedido exitosamente"
        })
        PedirForm.reset()
        this.idServicio = ""
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



  getHabitaciones(idHotel){
    console.log("id"+idHotel)
    this._HotelesService.obtenerHabitaciones(this._UsuariosService.obtenerToken(),idHotel).subscribe(
      (response) => {
        console.log(response.hotel)
          this.habitacionesModelGet = response.habitaciones
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

  getEventos(idHotel){
    this._HotelesService.obtenerEventos(this._UsuariosService.obtenerToken(), idHotel).subscribe(
      (response) => {
        console.log(response.eventos)
          this.eventosModelGet = response.eventos
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

  getServicios(idHotel){
    this._HotelesService.obtenerServicios(this._UsuariosService.obtenerToken(), idHotel).subscribe(
      (response) => {
        console.log(response.servicios)
          this.serviciosModelGet = response.servicios
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
