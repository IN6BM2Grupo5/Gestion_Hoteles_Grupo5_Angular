import { Component, OnInit } from '@angular/core';
import { HotelesService } from 'src/app/services/hoteles.service';
import { habitaciones } from 'src/app/models/habitaciones.model';
import Swal from 'sweetalert2'
import { UsuariosService } from 'src/app/services/usuarios.service';
@Component({
  selector: 'app-habitaciones-disponibles',
  templateUrl: './habitaciones-disponibles.component.html',
  styleUrls: ['./habitaciones-disponibles.component.scss'],
  providers: [HotelesService, UsuariosService]
})
export class HabitacionesDisponiblesComponent implements OnInit {
  public habitacionesModelGet: habitaciones;
  public idHotel;
  public cantidadDisponibles;
  constructor(public _HotelesService : HotelesService,
    public _UsuariosService : UsuariosService) { }

  ngOnInit(): void {
    this.getHabitaciones()
  }

  getHabitaciones(){
    this._HotelesService.obtenerHabitaciones(this._UsuariosService.obtenerToken()).subscribe(
      (response) => {
        console.log( response.habitaciones)
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
