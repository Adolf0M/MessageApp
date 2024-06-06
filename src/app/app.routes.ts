import { RouterModule, Routes } from "@angular/router";
import { authGuard, publicGuard } from "./core/guards";
import { NgModule } from "@angular/core";




export const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
  }, 
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () => import('./components/navbar/navbar.component').then(m => m.NavbarComponent),
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
      {
        path: 'forgot',
        loadComponent: () => import('./components/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
