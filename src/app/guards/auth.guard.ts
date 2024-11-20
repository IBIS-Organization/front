import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {ServiceService} from "../service/service.service";

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(ServiceService);
  const router = inject(Router);

  if(authService.isAuthenticated()){
    return true;
  }else {
    return router.navigate(['/iniciarSesion']);
  }
};
