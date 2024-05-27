import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private authService: AuthService) {

  }
  logIn(email: string, password: string) {
    this.authService.logInWithEmailAndPassword(email, password);
  }

  logInWithGoogle() {
    this.authService.logInWithGoogleProvider();
  }

}
