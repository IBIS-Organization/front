import { Routes } from '@angular/router';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';  // Importa el componente de iniciar sesión

export const routes: Routes = [
  { path: '', redirectTo: 'iniciar-sesion', pathMatch: 'full' },  // Redirecciona a iniciar sesión por defecto
  { path: 'iniciar-sesion', component: IniciarSesionComponent },  // Ruta para el componente de iniciar sesión
  { path: '**', redirectTo: 'iniciar-sesion' }  // Redirección por defecto a "iniciar-sesion" en caso de rutas no encontradas
];
