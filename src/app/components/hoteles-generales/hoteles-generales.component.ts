import { Component, OnInit } from '@angular/core';
import { hoteles } from 'src/app//models/hoteles.model'
import { HotelesService } from 'src/app/services/hoteles.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hoteles-generales',
  templateUrl: './hoteles-generales.component.html',
  styleUrls: ['./hoteles-generales.component.scss']
})
export class HotelesGeneralesComponent implements OnInit {
  tipo;
  entrada = '';
  mensaje = ''
  tipos = [
    {nombre: 'Nombre'},
    {nombre: 'Dirección'},
  ]
  public HotelesModelGet: hoteles;
  constructor(
    private _HotelesService: HotelesService) { }

  ngOnInit(): void {
    this.getHoteles()
  }


  getBusqueda(busqueda){
    console.log(this.tipo)
    if(this.tipo!=undefined){
      if(this.tipo == "Nombre"){
        this.getHotelesNombre(busqueda)
      }else if(this.tipo == "Dirección"){
        this.getHotelesDireccion(busqueda)
      }
    }
  }

  getHoteles(){
    this._HotelesService.obtenerHoteles("").subscribe(
      (response) => {
          this.HotelesModelGet = response.hoteles;
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

  getHotelesNombre(nombre){
    if(nombre){
        this._HotelesService.obtenerHotelesNombre(nombre,  "").subscribe(
          (response)=>{
            this.HotelesModelGet = response.hoteles;
            console.log(this.HotelesModelGet);
          },
          (error)=>{
            this.getHoteles();
          }
        )
    }else{
      this.getHoteles();
    }

  }

  getHotelesDireccion(direccion){
    if(direccion){
        this._HotelesService.obtenerHotelesDireccion(direccion,  "").subscribe(
          (response)=>{
            this.HotelesModelGet = response.hoteles;
            console.log(this.HotelesModelGet);
          },
          (error)=>{
            this.getHoteles();
          }
        )
    }else{
      this.getHoteles();
    }

  }

}

