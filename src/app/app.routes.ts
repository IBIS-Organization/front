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



export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'iniciarSesion', component: IniciarSesionComponent, canActivate:[authenticatedGuard] },  // Ruta para el componente de iniciar sesión
  { path: 'recuperar-contrasena', component: RecuperarContrasenaComponent, canActivate:[authenticatedGuard] },  // Ruta para el componente de recuperar contraseña
  { path: 'registro-usuario', component: RegistroUsuarioComponent, canActivate:[authenticatedGuard] },
  { path: 'habitaciones', component: HabitacionesComponent, canActivate:[authenticatedGuard] },
  { path: 'confirmacion-contrasena', component: ConfirmacionContrasenaComponent, canActivate:[authenticatedGuard]},
  { path: 'ubicacion', component: UbicacionComponent, canActivate:[authenticatedGuard]},
  { path: 'faq', component: FAQComponent, canActivate:[authenticatedGuard]},
  { path: 'principal', component: NavComponent, canActivate:[authenticatedGuard]},
  { path: 'detalle-habitacion', component: DetalleHabitacionComponent, canActivate:[authenticatedGuard]},
  { path: 'historial-reservas', component: HistorialReservasComponent, canActivate:[authGuard]},
  { path: 'landing-logueado', component: LandingLogueadoComponent, canActivate:[authGuard]},
  { path: 'pago-habitacion', component: PagoHabitacionComponent, canActivate:[authGuard]},
  { path: 'reserva', component: ReservaComponent, canActivate:[authGuard]},
  { path: 'reservar/:id', component: DetalleHabitacionComponent, canActivate:[authGuard]},
  { path: 'ubicacion-logueado', component: UbicacionLogueadoComponent, canActivate:[authGuard]},
  { path: 'faq-logueado', component: FaqLogueadoComponent, canActivate:[authGuard]},
  { path: 'listar-personal', component: ListarPersonalComponent},
  { path: 'registrar-personal', component: RegistrarPersonalComponent},
  { path: 'editar-datos-personal', component: EditarDatosPersonalComponent},
  { path: 'lista-habitaciones', component: ListaHabitacionesComponent},
  { path: 'agregar-habitacion', component: AgregarHabitacionComponent},
  { path: 'editar-habitacion', component: EditarHabitacionComponent},
  { path: '**', redirectTo: 'principal'}
];
