import { RouterModule, Routes } from "@angular/router";
import { authGuard, publicGuard } from "./core/guards";



export const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'auth',
    canActivate: [publicGuard],
    children: [
      {
        path: 'register',
        loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent),
      },
      {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent),
      },
    ],
  },
];
export class AppRoutingModule {}
