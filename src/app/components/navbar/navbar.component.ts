import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router
  ) {}
  ngOnInit(): void {
    
  }

  onClick() {
    this.userService.logout()
    .then(() => {
      this.router.navigate(['/register']);

    })
    .catch(error => console.log(error))
  }
}
