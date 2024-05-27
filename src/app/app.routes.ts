import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', 
    redirectTo: 'register',
    pathMatch: 'full'
  },
  {
    path: 'home',
    title: 'MessageApp',
    loadComponent: () => 
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'login',
    title: 'Iniciar Sesión',
    loadComponent: () => 
      import('./pages/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'register',
    title: 'Registrate',
    loadComponent: () =>
      import('./pages/register/register.component').then((m) => m.RegisterComponent),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
