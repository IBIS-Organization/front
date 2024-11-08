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


export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'iniciarSesion', component: IniciarSesionComponent },  // Ruta para el componente de iniciar sesión
  { path: 'recuperar-contrasena', component: RecuperarContrasenaComponent },  // Ruta para el componente de recuperar contraseña
  { path: 'registro-usuario', component: RegistroUsuarioComponent },
  { path: 'habitaciones', component: HabitacionesComponent },
  { path: 'confirmacion-contrasena', component: ConfirmacionContrasenaComponent},
  { path: 'ubicacion', component: UbicacionComponent},
  { path: 'faq', component: FAQComponent},
  { path: 'principal', component: NavComponent},
  { path: 'landing-logueado', component: LandingLogueadoComponent},
  { path: '**', redirectTo: 'principal'}
];