import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [UsuariosService]
})
export class NavbarComponent implements OnInit {

  public identidad;
  public usuario;

  constructor( public _UsuariosService: UsuariosService) {
    this.identidad = this._UsuariosService.obtenerIdentidad();
  }

  ngOnInit(): void {
    this.usuario = this._UsuariosService.obtenerIdentidad().usuario;
  }

  logOut(){
    localStorage.clear();
  }


}
