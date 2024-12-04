import { Routes } from '@angular/router';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';  // Importa el componente de registro
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';  // Importa el componente de iniciar sesión
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';  // Importa el componente de recuperar contraseña
import { HabitacionesComponent } from './habitaciones/habitaciones.component'; // Importa el componente Habitaciones
import { NavComponent } from './nav/nav.component';
import { ConfirmacionContrasenaComponent } from './confirmacion-contrasena/confirmacion-contrasena.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { FAQComponent } from './faq/faq.component';
import { LandingLogueadoComponent } from './landing-logueado/landing-logueado.component';
import {DetalleHabitacionComponent} from "./detalle-habitacion/detalle-habitacion.component";
import {PagoHabitacionComponent} from "./pago-habitacion/pago-habitacion.component";
import {ReservaComponent} from "./reserva/reserva.component";
import {UbicacionLogueadoComponent} from "./ubicacion-logueado/ubicacion-logueado.component";
import {FaqLogueadoComponent} from "./faq-logueado/faq-logueado.component";
import {authenticatedGuard} from "./guards/authenticated.guard";
import {HistorialReservasComponent} from "./historial-reservas/historial-reservas.component";
import {authGuard} from "./guards/auth.guard";
import { ListarPersonalComponent } from './listar-personal/listar-personal.component';
import { RegistrarPersonalComponent } from './registrar-personal/registrar-personal.component';
import { EditarDatosPersonalComponent } from './editar-datos-personal/editar-datos-personal.component';
import { ListaHabitacionesComponent } from './lista-habitaciones/lista-habitaciones.component';
import { AgregarHabitacionComponent } from './agregar-habitacion/agregar-habitacion.component';
import { EditarHabitacionComponent } from './editar-habitacion/editar-habitacion.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { RecepcionistaComponent } from './recepcionista/recepcionista.component';
import { CheckInComponent } from './check-in/check-in.component';
import { empleadoGuard } from './guards/empleado.guard';
import { clienteGuard } from './guards/cliente.guard';
import { adminGuard } from './guards/admin.guard';
import { ChangePasswordFirstloginComponent } from './change-password-firstlogin/change-password-firstlogin.component';
import { PendientesComponent } from './pendientes/pendientes.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { HabitacionesLogueadoComponent } from './habitaciones-logueado/habitaciones-logueado.component';

export const routes: Routes = [
  //admin
  { path: 'listar-personal', component: ListarPersonalComponent, canActivate: [adminGuard]},
  { path: 'registrar-personal', component: RegistrarPersonalComponent, canActivate: [adminGuard]},
  { path: 'editar-datos-personal', component: EditarDatosPersonalComponent, canActivate: [adminGuard]},
  { path: 'lista-habitaciones', component: ListaHabitacionesComponent, canActivate: [adminGuard]},
  { path: 'agregar-habitacion', component: AgregarHabitacionComponent, canActivate: [adminGuard]},
  { path: 'editar-habitacion', component: EditarHabitacionComponent, canActivate: [adminGuard]},
  { path: 'change-password-firstlogin', component: ChangePasswordFirstloginComponent, canActivate: [adminGuard]},
  //Cliente logueado
  { path: 'ubicacion-logueado', component: UbicacionLogueadoComponent, canActivate: [clienteGuard]},
  { path: 'faq-logueado', component: FaqLogueadoComponent, canActivate: [clienteGuard]},
  { path: 'landing-logueado', component: LandingLogueadoComponent, canActivate: [clienteGuard]},
  { path: 'historial-reservas', component: HistorialReservasComponent, canActivate: [clienteGuard]},
  { path: 'detalle-habitacion', component: DetalleHabitacionComponent, canActivate: [clienteGuard]},
  { path: 'habitaciones-logueado', component: HabitacionesComponent, canActivate: [clienteGuard]},
  { path: 'reservar/:id', component: DetalleHabitacionComponent, canActivate: [clienteGuard]},
  { path: 'profile', component: EditProfileComponent, canActivate: [clienteGuard]},
  { path: 'habitacioneslogueado', component: HabitacionesLogueadoComponent, canActivate: [clienteGuard]},
  //empleado
  { path:'check-in', component:CheckInComponent, canActivate: [empleadoGuard]},
  { path: 'recepcionista', component: RecepcionistaComponent , canActivate: [empleadoGuard]},
  { path: 'pendientes', component: PendientesComponent , canActivate: [empleadoGuard]},
  { path: 'check-out', component: CheckOutComponent , canActivate: [empleadoGuard]},
 //Cliente sin iniciar sesion

  { path: 'habitaciones', component: HabitacionesComponent, canActivate: [authenticatedGuard]},
  { path: 'ubicacion', component: UbicacionComponent, canActivate: [authenticatedGuard]},
  { path: 'faq', component: FAQComponent, canActivate: [authenticatedGuard]},
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'iniciarSesion', component: IniciarSesionComponent, canActivate: [authenticatedGuard] }, // Ruta para el componente de iniciar sesión
  { path: 'recuperar-contrasena', component: RecuperarContrasenaComponent, canActivate: [authenticatedGuard]},  // Ruta para el componente de recuperar contraseña
  { path: 'registro-usuario', component: RegistroUsuarioComponent, canActivate: [authenticatedGuard]},
  { path: 'confirmacion-contrasena', component: ConfirmacionContrasenaComponent, canActivate: [authenticatedGuard]},
  { path: 'principal', component: NavComponent, canActivate: [authenticatedGuard]},
  { path: '**', redirectTo: 'principal'}
];
