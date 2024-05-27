import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './shared/auth.guard';
// Importa AuthGuard si planeas usarlo
// import { AuthGuard } from './shared/'

// Define las rutas
export const routes: Routes = [
  {
    path: '', 
    redirectTo: 'home', // Redirige a la página de inicio de sesión por defecto
    pathMatch: 'full'
  },
  {
    path: 'login',
    //component: LoginComponent, // Agrega el componente LoginComponent si ya está importado
    loadChildren: () => import('./pages/login/login.component').then((m) => m.LoginComponent), // Carga el componente usando loadChildren
    data: { title: 'Iniciar Sesión' } // Agrega datos adicionales, como el título
  },
  {
    path: 'register',
    //component: RegisterComponent, // Agrega el componente RegisterComponent si ya está importado
    loadChildren: () => import('./pages/register/register.component').then((m) => m.RegisterComponent), // Carga el componente usando loadChildren
    data: { title: 'Registrate' } // Agrega datos adicionales, como el título
  },
  {
    path: 'home',
    //component: HomeComponent, // Agrega el componente HomeComponent si ya está importado
    loadChildren: () => import('./pages/home/home.component').then((m) => m.HomeComponent), // Carga el componente usando loadChildren
    data: { title: 'MessageApp' }, canActivate: [AuthGuard] // Agrega datos adicionales, como el título // Agrega canActivate si planeas usar AuthGuard
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
