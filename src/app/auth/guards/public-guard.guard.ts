import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../interfaces/auth-status';

export const publicGuardGuard: CanActivateFn = (route, state) => {

  const authService=inject(AuthService)
  const router=inject(Router)

  if(authService.authStatus()===AuthStatus.authenticated){
    router.navigateByUrl('/suscriptions/memberships')
    return false
  }
  return true;

};
