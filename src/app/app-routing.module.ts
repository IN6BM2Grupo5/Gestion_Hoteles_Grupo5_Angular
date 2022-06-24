import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HotelesUsuarioComponent } from './components/hoteles-usuario/hoteles-usuario.component';
import { UsuariosRegistradosComponent } from './components/usuarios-registrados/usuarios-registrados.component';
import { HotelesAdminAppComponent } from './components/hoteles-admin-app/hoteles-admin-app.component';
import { EstadisticaReporteHotelComponent } from './components/estadistica-reporte-hotel/estadistica-reporte-hotel.component';
import { EstadisticaGeneralComponent } from './components/estadistica-general/estadistica-general.component';
import { HabitacionesUsuarioComponent } from './components/habitaciones-usuario/habitaciones-usuario.component';
import { HistorialComponent } from './components/historial/historial.component';
import { EditarCuentaComponent } from './components/editar-cuenta/editar-cuenta.component';
import { HabitacionesAdminComponent } from './components/habitaciones-admin/habitaciones-admin.component';
import { UsuariosHospedadosComponent } from './components/usuarios-hospedados/usuarios-hospedados.component';
import { AdministradoresComponent } from './components/administradores/administradores.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio',  pathMatch: 'full'},
  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: LoginComponent},

  { path: 'usuarios-registrados', component: UsuariosRegistradosComponent},
  { path: 'hoteles-admin', component: HotelesAdminAppComponent},
  { path: 'habitaciones-admin', component: HabitacionesAdminComponent},
  { path: 'estadistica-general', component: EstadisticaGeneralComponent},
  { path: 'estadistica-reporte', component: EstadisticaReporteHotelComponent},
  { path: 'administradores', component: AdministradoresComponent},

  { path: 'registro', component: RegistroComponent},
  { path: 'hoteles-usuario', component: HotelesUsuarioComponent},
  { path: 'habitaciones-usuario', component: HabitacionesUsuarioComponent},
  { path: 'historial', component: HistorialComponent},
  { path: 'editar-cuenta', component:EditarCuentaComponent},

  { path: 'usuarios-hospedados', component: UsuariosHospedadosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
