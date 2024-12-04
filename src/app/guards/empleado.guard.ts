import { CanActivateFn, Router } from '@angular/router';
import { ServiceService } from '../service/service.service';
import { inject } from '@angular/core';

export const empleadoGuard: CanActivateFn = (route, state) => {
  const authService = inject(ServiceService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    const role = authService.getRoleFromToken();

    if (role === 'EMPLEADO') {
      return true;
    }
  }

  // Si no está autenticado o no es un estudiante
  return router.navigate(['/principal']);
};
