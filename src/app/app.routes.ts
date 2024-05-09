import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', 
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    title: 'MessageApp',
    loadComponent: () => 
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
];
