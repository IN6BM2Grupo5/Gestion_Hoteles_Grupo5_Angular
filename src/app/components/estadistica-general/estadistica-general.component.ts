import { Component, OnInit } from '@angular/core';
import { HotelesService } from 'src/app/services/hoteles.service';
import Swal from 'sweetalert2'
import { UsuariosService } from 'src/app/services/usuarios.service';
@Component({
  selector: 'app-estadistica-general',
  templateUrl: './estadistica-general.component.html',
  styleUrls: ['./estadistica-general.component.scss']
})
export class EstadisticaGeneralComponent implements OnInit {
  public HotelesModelGet:any = [];
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

  constructor(public _HotelesService : HotelesService,
    public _UsuariosService : UsuariosService) { }

  ngOnInit(): void {
    this.getHoteles();
  }



  getHoteles(){
    this._HotelesService.obtenerHoteles(this._UsuariosService.obtenerToken()).subscribe(
      (response) => {
          this.HotelesModelGet = response.hoteles;
          this.HotelesModelGet.forEach(dato => {
            this.chartLabels.push(dato.nombreHotel);
            this.chartData.push(dato.reservas);
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
