import { Component, OnInit } from '@angular/core';
import { HotelesService } from 'src/app/services/hoteles.service'
import { UsuariosService } from 'src/app/services/usuarios.service';
import { usuarios } from 'src/app/models/usuarios.model';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.scss'],
  providers: [UsuariosService, HotelesService]
})
export class FacturacionComponent implements OnInit {
  constructor(    private _UsuariosService: UsuariosService,     private _HotelesService: HotelesService) { }



  ngOnInit(): void {
  }


  Facturar(id){
    this._HotelesService.confirmarCuenta(this._UsuariosService.obtenerToken(), id).subscribe(
      (response)=>{
        console.log(response);
        Swal.fire({
          icon: 'success',
          title: 'Reserva facturada',
          text: "Reserva facturada exitosamente"
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

}
