import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { usuarios } from 'src/app/models/usuarios.model';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  providers: [UsuariosService]
})
export class RegistroComponent implements OnInit {
  public usuarioModel: usuarios;

  constructor(
    private _UsuariosService: UsuariosService,
    private _router: Router
  ) {
    this.usuarioModel = new usuarios(
      "",
      "",
      "",
      "",
      "",
      [{
        descripcion: "",
        precio: 0,
        fechaInicio: "",
        fechaFin: ""
      }]
    )
  }

  ngOnInit(): void {
  }

  registrar(){
    this._UsuariosService.registrarse(this.usuarioModel).subscribe(
      (response)=>{
        console.log(response);

        const currentUrl = this._router.url;
    this._router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this._router.navigate([currentUrl]);
        Swal.fire({
          icon: 'success',
          title: 'Operación exitosa',
          text: "Cuenta creada exitosamente"
        })
    });
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
