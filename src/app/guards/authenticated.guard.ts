import {CanActivateFn, Router} from '@angular/router';
import {ServiceService} from "../service/service.service";
import {inject} from "@angular/core";

export const authenticatedGuard: CanActivateFn = (route, state) => {
  const authService = inject(ServiceService);
  const router = inject(Router);

  if(authService.isAuthenticated()){
    const role = authService.getRoleFromToken();

    if(role === 'CLIENTE' ) {
      return router.navigate(['/landing-logueado']);
      return false;
    } else if(role === 'EMPLEADO') {
      return router.navigate(['/recepcionista']);
      return false;
    }else if(role === 'ADMIN') {
      return router.navigate(['/listar-personal']);
      return false;
    } else{
      router.navigate(['/principal']);
      return false;
    }
  }
  return true;
};
