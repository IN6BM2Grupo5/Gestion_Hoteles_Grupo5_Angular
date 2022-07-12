import { Component, OnInit } from '@angular/core';
import { HotelesService } from 'src/app/services/hoteles.service'
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';
import { reservas } from 'src/app/models/reservas.model';

@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.scss'],
  providers: [UsuariosService, HotelesService]
})
export class ReservacionesComponent implements OnInit {
  public ReservasModelGet: reservas;
  constructor(    private _UsuariosService: UsuariosService,     private _HotelesService: HotelesService) { }

  ngOnInit(): void {
    this.getReservas()
  }

  stringAsDate(dateStr: string) {
    return new Date(dateStr);
}


  getReservas(){
    this._HotelesService.verReservas(this._UsuariosService.obtenerToken()).subscribe(
      (response) => {
          this.ReservasModelGet = response.reservas.sort((a, b) => Date.parse(b.fechaInicio) - Date.parse(a.fechaInicio));

          console.log(response.reservas)
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
