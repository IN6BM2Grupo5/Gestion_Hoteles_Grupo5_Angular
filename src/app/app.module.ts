import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from '@rinminase/ng-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReservacionesPendientesComponent } from './components/reservaciones-pendientes/reservaciones-pendientes.component';
import { InicioUsuarioComponent } from './components/inicio-usuario/inicio-usuario.component';
import { InicioAdminComponent } from './components/inicio-admin/inicio-admin.component';
import { InicioHotelComponent } from './components/inicio-hotel/inicio-hotel.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    HotelesUsuarioComponent,
    UsuariosRegistradosComponent,
    HotelesAdminAppComponent,
    EstadisticaReporteHotelComponent,
    EstadisticaGeneralComponent,
    HabitacionesUsuarioComponent,
    HistorialComponent,
    EditarCuentaComponent,
    HabitacionesAdminComponent,
    UsuariosHospedadosComponent,
    AdministradoresComponent,
    ReservacionesComponent,
    HabitacionesDisponiblesComponent,
    FacturacionComponent,
    ConfirmacionReservacionComponent,
    NavbarComponent,
    ReservacionesPendientesComponent,
    InicioUsuarioComponent,
    InicioAdminComponent,
    InicioHotelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
