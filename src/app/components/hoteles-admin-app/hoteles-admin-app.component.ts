import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { hoteles } from 'src/app//models/hoteles.model'
import { usuarios } from 'src/app/models/usuarios.model';
import { HotelesService } from 'src/app/services/hoteles.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hoteles-admin-app',
  templateUrl: './hoteles-admin-app.component.html',
  styleUrls: ['./hoteles-admin-app.component.scss'],
  providers: [UsuariosService, HotelesService]
})
export class HotelesAdminAppComponent implements OnInit {
  public UsuariosModelGet: usuarios;
  public HotelesModelGet: hoteles;
  public HotelesModel: hoteles;

  municipios = [
    {nombre: 'Amatitlan'},
    {nombre: 'Chinautla'},
    {nombre: 'Chuarrancho'},
    {nombre: 'Ciudad de Guatemala'},
    {nombre: 'Fraijanes'},
    {nombre: 'Mixco'},
    {nombre: 'Palencia'},
    {nombre: 'San Jose del Golfo'},
    {nombre: 'San Jose Pinula'},
    {nombre: 'San Juan Sacatepequez'},
    {nombre: 'San Miguel Petapa'},
    {nombre: 'San Pedro Ayampuc'},
    {nombre: 'San Pedro Sacatepequez'},
    {nombre: 'San Raymundo'},
    {nombre: 'Santa Catarina Pinula'},
    {nombre: 'Villa Canales'},
    {nombre: 'Villa Nueva'}
  ]

  constructor(
    private _UsuariosService: UsuariosService,
    private _HotelesService: HotelesService
  ) {
    this.HotelesModel = new hoteles(
      "",
      "",
      "",
      "",
      "",
      0
    );
  }

  ngOnInit(): void {
    this.getUsuarios()
    this.getHoteles()
  }

  agregar(addHotelForm){
    this._HotelesService.agregarHotel(this.HotelesModel, this._UsuariosService.obtenerToken()).subscribe(
      (response)=>{
        console.log(response);

        Swal.fire({
          icon: 'success',
          title: 'Operación exitosa',
          text: "Hotel creado exitosamente"
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
  }

  getUsuarios(){
    this._UsuariosService.obtenerAdminsHoteles(this._UsuariosService.obtenerToken()).subscribe(
      (response) => {
          this.UsuariosModelGet = response.usuarios;

          console.log(response.usuarios)
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

  getHoteles(){
    this._HotelesService.obtenerHoteles(this._UsuariosService.obtenerToken()).subscribe(
      (response) => {
          this.HotelesModelGet = response.hoteles;

          console.log(response.hoteles)
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
