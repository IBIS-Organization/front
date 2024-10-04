import { Routes } from '@angular/router';
import { HabitacionesComponent } from './habitaciones/habitaciones.component'; // Importa el componente Habitaciones

export const routes: Routes = [
  { path: '', redirectTo: 'habitaciones', pathMatch: 'full' },  // Redirecciona a iniciar sesión por defecto
  { path: 'habitaciones', component: HabitacionesComponent },  // Ruta para el componente de iniciar sesión
  { path: '**', redirectTo: 'habitaciones' }  // Redirección por defecto a "iniciar-sesion" en caso de rutas no encontradas
];