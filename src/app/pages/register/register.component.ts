import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor(private authService: AuthService) {

  }

  singUp(email: string, password: string) {
    this.authService.signUpWithEmailAndPassword(email, password);
  }
}
