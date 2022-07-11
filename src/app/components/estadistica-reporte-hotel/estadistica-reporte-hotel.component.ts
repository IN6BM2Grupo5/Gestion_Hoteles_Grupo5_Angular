import { Component, OnInit } from '@angular/core';
import { HotelesService } from 'src/app/services/hoteles.service';
import Swal from 'sweetalert2'
import { ActivatedRoute, Router } from '@angular/router';
import { habitaciones } from 'src/app/models/habitaciones.model';
import { UsuariosService } from 'src/app/services/usuarios.service';
@Component({
  selector: 'app-estadistica-reporte-hotel',
  templateUrl: './estadistica-reporte-hotel.component.html',
  styleUrls: ['./estadistica-reporte-hotel.component.scss'],
  providers: [HotelesService, UsuariosService]
})
export class EstadisticaReporteHotelComponent implements OnInit {
  public habitacionesModelGet: habitaciones;

  constructor( public _activatedRoute : ActivatedRoute,
    public _HotelesService : HotelesService,
    public _UsuariosService : UsuariosService) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta) => {
      this.getHabitaciones(dataRuta.get('idHotel'))
    })
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

}
