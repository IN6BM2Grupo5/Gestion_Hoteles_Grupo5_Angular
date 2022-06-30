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
import { ReservacionesComponent } from './components/reservaciones/reservaciones.component';
import { HabitacionesDisponiblesComponent } from './components/habitaciones-disponibles/habitaciones-disponibles.component';
import { FacturacionComponent } from './components/facturacion/facturacion.component';
import { ConfirmacionReservacionComponent } from './components/confirmacion-reservacion/confirmacion-reservacion.component';
import { ReservacionesPendientesComponent } from './components/reservaciones-pendientes/reservaciones-pendientes.component';
import { InicioUsuarioComponent } from './components/inicio-usuario/inicio-usuario.component';
import { UsuarioGuard } from './services/usuario.guard';
import { InicioAdminComponent } from './components/inicio-admin/inicio-admin.component';
import { AdminGuard } from './services/admin.guard';
import { HotelGuard } from './services/hotel.guard';
import { InicioHotelComponent } from './components/inicio-hotel/inicio-hotel.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio',  pathMatch: 'full'},

  // Generales
  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent},

  // Usuario
  { path: 'usuario',  component: InicioUsuarioComponent, canActivate: [UsuarioGuard]  ,children: [
    { path: 'hoteles-usuario', component: HotelesUsuarioComponent},
    { path: 'habitaciones-usuario/:idHotel', component: HabitacionesUsuarioComponent},
    { path: 'reservaciones-pendientes', component: ReservacionesPendientesComponent},
    { path: 'confirmar-reservacion', component:ConfirmacionReservacionComponent},
    { path: 'historial', component: HistorialComponent},
    { path: 'editar-cuenta', component:EditarCuentaComponent},
  ]},

  // Administrador Aplicacion
  { path: 'admin',  component: InicioAdminComponent, canActivate: [AdminGuard]  ,children: [
  { path: 'usuarios-registrados', component: UsuariosRegistradosComponent},
  { path: 'hoteles-admin', component: HotelesAdminAppComponent},
  { path: 'habitaciones-admin/:idHotel', component: HabitacionesAdminComponent},
  { path: 'administradores', component: AdministradoresComponent},
  { path: 'estadistica-general', component: EstadisticaGeneralComponent},
  { path: 'estadistica-reporte', component: EstadisticaReporteHotelComponent},
  ]},

  // Administrador Hotel
  { path: 'hotel',  component: InicioHotelComponent, canActivate: [HotelGuard]  ,children: [
  { path: 'reservaciones', component: ReservacionesComponent},
  { path: 'usuarios-hospedados', component: UsuariosHospedadosComponent},
  { path: 'habitaciones-disponibles', component: HabitacionesDisponiblesComponent},
  { path: 'facturar', component: FacturacionComponent},
  ]},

  { path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
