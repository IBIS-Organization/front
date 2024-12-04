import { CanActivateFn, Router } from '@angular/router';
import { ServiceService } from '../service/service.service';
import { inject } from '@angular/core';

export const clienteGuard: CanActivateFn = (route, state) => {
  const authService = inject(ServiceService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    const role = authService.getRoleFromToken();

    if (role === 'CLIENTE') {
      return true;
    }
  }
  return router.navigate(['/principal']);
};
