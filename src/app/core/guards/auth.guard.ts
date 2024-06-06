import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { map } from 'rxjs';

export const routerInjection = () => inject(Router);

export const authStateObs$ = () => inject(UserService).authState$;

export const authGuard: CanActivateFn = () => {
  const userService = inject(UserService);

  return userService.authState$.pipe(
    map(user => {
      if (!user) {
        console.log('No user found, redirecting to login');
        return false;
      }
      console.log('User is authenticated');
      return true;
    })
  );
};


export const publicGuard: CanActivateFn = () => {
  const userService = inject(UserService);

  return userService.authState$.pipe(
    map(user => {
      if (user) {
        console.log('User is already authenticated, redirecting to home');
        return false;
      } else {
        console.log('User is not authenticated');
        return true;
      }
    })
  );
};

