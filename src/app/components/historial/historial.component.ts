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
  public FacturasModelGet: facturas;
  constructor(    private _UsuariosService: UsuariosService,     private _HotelesService: HotelesService) { }

  ngOnInit(): void {
    this.getHistorial()
  }

  getHistorial(){
    this._HotelesService.verHistorial(this._UsuariosService.obtenerToken()).subscribe(
      (response) => {
          this.FacturasModelGet = response.historial;

          console.log(response.historial)
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
