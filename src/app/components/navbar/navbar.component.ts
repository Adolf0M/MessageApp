import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule], // Agregar CommonModule a los imports
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onClick() {
    this.userService.logout()
      .then(() => {
        this.router.navigate(['auth/register']);
        this.userService.openSnackBar('Cerrando sesión... ');
      })
      .catch(error => console.log(error))
  }
}
