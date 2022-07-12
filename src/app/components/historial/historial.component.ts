import { Component, OnInit } from '@angular/core';
import { HotelesService } from 'src/app/services/hoteles.service'
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';
import { facturas } from 'src/app/models/facturas.model';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss'],
  providers: [UsuariosService, HotelesService]
})
export class HistorialComponent implements OnInit {

  historialServicios = []
  historialHabitaciones = []
  constructor(    private _UsuariosService: UsuariosService,     private _HotelesService: HotelesService) { }

  ngOnInit(): void {
    this.getHistorial()
  }

  getHistorial(){
    this._HotelesService.verHistorial(this._UsuariosService.obtenerToken()).subscribe(
      (response) => {

          for(let i = 0; i < response.historial.length; i++){
            for(let j = 0; j < response.historial[i].cuenta.length; j++){
              if(response.historial[i].cuenta[j].fechaFin==null){
                this.historialServicios.push(response.historial[i].cuenta[j]);
              }else{
                this.historialHabitaciones.push(response.historial[i].cuenta[j]);
              }

            }
          }

          console.log(this.historialServicios)
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


}
