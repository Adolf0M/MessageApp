import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  formLogin: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.userService.login(this.formLogin.value)
      .then(response => {
        console.log(response);
        this.router.navigateByUrl('/');
        this.userService.openSnackBar('Registro éxitoso 😎');
      })
      .catch(error => {
        console.log(error);
        this.userService.openSnackBar('Registro fallido...');
      });
  }

  onClick() {
    this.userService.loginWithGoogle()
      .then(response => {
        console.log(response);
        this.router.navigateByUrl('/');
      })
      .catch(error => {
        console.log(error);
        this.userService.openSnackBar('Login with Google failed');
      });
  }

  onNavigate() {
    this.router.navigate(['auth/register']);
  }

  onForgot() {
    const email = this.formLogin.get('email')?.value;
    if (email) {
      this.userService.resetPassword(email)
        .then(() => {
          this.userService.openSnackBar('Password reset email sent successfully.');
        })
        .catch(error => {
          console.log(error);
          this.userService.openSnackBar('Failed to send password reset email.');
        });
    } else {
      this.userService.openSnackBar('Please enter your email to reset password.');
    }
  }
}
