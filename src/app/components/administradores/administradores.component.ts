import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { usuarios } from 'src/app/models/usuarios.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-administradores',
  templateUrl: './administradores.component.html',
  styleUrls: ['./administradores.component.scss'],
  providers: [UsuariosService]
})
export class AdministradoresComponent implements OnInit {
  public UsuariosModelGet: usuarios;
  public usuarioModel: usuarios;

  constructor(
    private _UsuariosService: UsuariosService
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
  )}

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

  ngOnInit(): void {
    this.getUsuarios()
  }

  registrar(addAdminForm){
    this._UsuariosService.agregarAdmin(this.usuarioModel, this._UsuariosService.obtenerToken()).subscribe(
      (response)=>{
        console.log(response);
        this.getUsuarios()
        addAdminForm.reset()
        Swal.fire({
          icon: 'success',
          title: 'Operación exitosa',
          text: "Admin de Hotel creado exitosamente"
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
