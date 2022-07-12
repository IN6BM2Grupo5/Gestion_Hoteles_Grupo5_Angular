import { Component, OnInit } from '@angular/core';
import { HotelesService } from 'src/app/services/hoteles.service';
import Swal from 'sweetalert2'
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
@Component({
  selector: 'app-estadistica-reporte-hotel',
  templateUrl: './estadistica-reporte-hotel.component.html',
  styleUrls: ['./estadistica-reporte-hotel.component.scss'],
  providers: [HotelesService, UsuariosService]
})
export class EstadisticaReporteHotelComponent implements OnInit {
  public habitacionesModelGet:any = [];
  chartOptions = {
    responsive: true,
  };
  chartLabels:any = [];
  chartData:any = [];
  chartColors:any = [
    {
      backgroundColor: []
    }
  ];
  chartLegend = true;
  chartPlugins = [];;

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
        console.log(response)
          this.habitacionesModelGet = response.habitaciones;
          this.habitacionesModelGet.forEach(dato => {
            this.chartLabels.push(dato.tipo);
            this.chartData.push(dato.registros);
            this.chartColors[0].backgroundColor.push(`#${ Math.floor(Math.random()*16777215).toString(16)}`)
          });
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
