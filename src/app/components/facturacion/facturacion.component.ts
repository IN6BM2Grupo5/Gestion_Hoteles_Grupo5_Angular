import { Component, OnInit } from '@angular/core';
import { HotelesService } from 'src/app/services/hoteles.service'
import { UsuariosService } from 'src/app/services/usuarios.service';
import { usuarios } from 'src/app/models/usuarios.model';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.scss'],
  providers: [UsuariosService, HotelesService]
})
export class FacturacionComponent implements OnInit {

  public usuariofacturar: any
  public numeroFactura;
  public UsuariosModelGet: usuarios;
  constructor(      private _router: Router, public _activatedRoute : ActivatedRoute,  private _UsuariosService: UsuariosService,     private _HotelesService: HotelesService) { }



  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta) => {
      this.getUsuarios(dataRuta.get('idUsuario'))
    })
    this.getRandomInt()
  }

  getformattedDate(){

    var date = new Date();
    return date;

  }

  getRandomInt() {
    this.numeroFactura = Math.floor(Math.random() * (9999-1000));
  }

  getUsuarios(id){
    this._UsuariosService.obtenerUsuariosId(id, this._UsuariosService.obtenerToken()).subscribe(
      (response) => {
          this.usuariofacturar = response.usuario;

          this.UsuariosModelGet = response.usuario.cuenta;

          console.log(response.usuario)
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

  Facturar(){
    this._HotelesService.confirmarCuenta(this._UsuariosService.obtenerToken(), this.usuariofacturar._id).subscribe(
      (response)=>{
        console.log(response);
        Swal.fire({
          icon: 'success',
          title: 'Reserva facturada',
          text: "Reserva facturada exitosamente"
        })
        this._router.navigate(['hotel/reservaciones']);
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
