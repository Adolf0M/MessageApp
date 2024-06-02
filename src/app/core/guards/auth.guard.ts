import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { map } from 'rxjs';

export const routerInjection = () => inject(Router);

export const authStateObs$ = () => inject(UserService).authState$;

export const authGuard: CanActivateFn = () => {
  const router = routerInjection();

  return authStateObs$().pipe(
    map((user) => {
      if (!user) {
        router.navigateByUrl('auth/login');
        return false;
      }
      return true;
    })
  );
};

export const publicGuard: CanActivateFn = () => {
  const router = routerInjection();

  return authStateObs$().pipe(
    map((user) => {
      if (user) {
        router.navigateByUrl('/');
        return false;
      }
      return true;
    })
  );
};