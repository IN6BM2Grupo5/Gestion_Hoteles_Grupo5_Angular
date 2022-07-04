import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelesService } from 'src/app/services/hoteles.service';
import { habitaciones } from 'src/app/models/habitaciones.model';
import Swal from 'sweetalert2'
import { UsuariosService } from 'src/app/services/usuarios.service';
import { servicios } from 'src/app/models/servicios.model';
import { eventos } from 'src/app/models/eventos.model';

@Component({
  selector: 'app-habitaciones-admin',
  templateUrl: './habitaciones-admin.component.html',
  styleUrls: ['./habitaciones-admin.component.scss'],
  providers: [HotelesService, UsuariosService]
})
export class HabitacionesAdminComponent implements OnInit {
  public habitacionesModelGet: habitaciones;
  public habitacionesModelPost: habitaciones;
  public serviciosModelGet: servicios;
  public serviciosModelPost: servicios;
  public eventosModelPost: eventos;
  public eventosModelGet: eventos;
  public token;
  public nombreHotel: string;
  constructor(
    public _activatedRoute : ActivatedRoute,
    public _HotelesService : HotelesService,
    public _UsuariosService : UsuariosService) {
      this.habitacionesModelPost = new habitaciones("", "", "", 0, 0, "" )
      this.serviciosModelPost = new servicios("", "", 0, "")
      this.eventosModelPost = new eventos("", "", "", "", "")
    }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta) => {
      this.getHotelNombre(dataRuta.get('idHotel'))
      this.getHabitaciones(dataRuta.get('idHotel'))
      this.getServicios(dataRuta.get('idHotel'))
      this.getEventos(dataRuta.get('idHotel'))
    })
  }

  agregarHabitacion(addHotelForm){
    this._activatedRoute.paramMap.subscribe((dataRuta) => {
      this._HotelesService.agregarHabitacion(this.habitacionesModelPost, dataRuta.get('idHotel'), this._UsuariosService.obtenerToken()).subscribe(
        (response)=>{
          console.log(response);
          this.getHabitaciones(dataRuta.get('idHotel'))
          Swal.fire({
            icon: 'success',
            title: 'Operación exitosa',
            text: "Habitación creada exitosamente"
          })
          addHotelForm.reset()
        },
        (error)=>{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.error.mensaje
          })
        }
      )
    })
  }


  agregarServicio(addServicioForm){
    this._activatedRoute.paramMap.subscribe((dataRuta) => {
      this._HotelesService.agregarServicio(this.serviciosModelPost, dataRuta.get('idHotel'), this._UsuariosService.obtenerToken()).subscribe(
        (response)=>{
          console.log(response);
          this.getServicios(dataRuta.get('idHotel'))
          Swal.fire({
            icon: 'success',
            title: 'Operación exitosa',
            text: "servicio creado exitosamente"
          })
          addServicioForm.reset()
        },
        (error)=>{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.error.mensaje
          })
        }
      )
    })
  }

  obtenerImagen(){
    const arr = ["evento-fogata.jpg","evento-graduacion.jpg","evento-fuegos.jpg"];
    let num = Math.floor(Math.random() * arr.length);
    this.eventosModelPost.imagen = "../../../assets/img/"+arr[num]
    console.log(this.eventosModelPost.imagen)
  }

  agregarEvento(addEventoForm){
    this.obtenerImagen()
    this._activatedRoute.paramMap.subscribe((dataRuta) => {
      this._HotelesService.agregarEvento(this.eventosModelPost, dataRuta.get('idHotel'), this._UsuariosService.obtenerToken()).subscribe(
        (response)=>{
          console.log(response);
          this.getEventos(dataRuta.get('idHotel'))
          Swal.fire({
            icon: 'success',
            title: 'Operación exitosa',
            text: "servicio creado exitosamente"
          })
          addEventoForm.reset()
        },
        (error)=>{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.error.mensaje
          })
        }
      )
    })
  }

  getEventos(idHotel){
    this._HotelesService.obtenerEventos(this._UsuariosService.obtenerToken(), idHotel).subscribe(
      (response) => {
        console.log("eventos"+response.eventos)
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
    this._HotelesService.obtenerHabitaciones(this._UsuariosService.obtenerToken(), idHotel).subscribe(
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
