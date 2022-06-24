import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
    AdministradoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
