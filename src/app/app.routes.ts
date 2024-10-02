import { Routes } from '@angular/router';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';  // Importa el componente de registro

export const routes: Routes = [
  { path: '', redirectTo: 'registro-usuario', pathMatch: 'full' },  // Redirecciona a "registro-usuario" por defecto
  { path: 'registro-usuario', component: RegistroUsuarioComponent },  // Ruta para el componente de registro de usuario
  { path: '**', redirectTo: 'registro-usuario' }  // Redirección por defecto a "registro-usuario" en caso de rutas no encontradas
];
