import { RouterModule, Routes } from "@angular/router";
import { authGuard, publicGuard } from "./core/guards";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./pages/home/home.component";




export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: 'home',
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
function canActivate(arg0: () => any): import("@angular/router").Route {
  throw new Error("Function not implemented.");
}

function redirectUnauthorizedTo(arg0: string[]): any {
  throw new Error("Function not implemented.");
}

