import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelesService } from 'src/app/services/hoteles.service';
import { habitaciones } from 'src/app/models/habitaciones.model';
import Swal from 'sweetalert2'
import { UsuariosService } from 'src/app/services/usuarios.service';
import { servicios } from 'src/app/models/servicios.model';
@Component({
  selector: 'app-habitaciones-usuario',
  templateUrl: './habitaciones-usuario.component.html',
  styleUrls: ['./habitaciones-usuario.component.scss'],
  providers: [HotelesService, UsuariosService]
})
export class HabitacionesUsuarioComponent implements OnInit {
  public habitacionesModelGet: habitaciones;
  public serviciosModelGet: servicios;
  public token;
  public nombreHotel: string;
  constructor( public _activatedRoute : ActivatedRoute,
    public _HotelesService : HotelesService,
    public _UsuariosService : UsuariosService) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta) => {
      this.getHotelNombre(dataRuta.get('idHotel'))
      this.getHabitaciones(dataRuta.get('idHotel'))
      this.getServicios(dataRuta.get('idHotel'))
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
