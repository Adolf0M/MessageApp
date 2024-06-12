import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  @Output() profileSelected = new EventEmitter<void>();
  @Output() homeSelected = new EventEmitter<void>();

  constructor(
    private userService: UserService,
    private router: Router
  ) {}
  ngOnInit(): void {
    
  }

  onClick() {
    this.userService.logout()
    .then(() => {
      this.router.navigate(['/login']);

    })
    .catch(error => console.log(error))
  }

  onProfileClick() {
    this.profileSelected.emit();
  }

  onHomeClick() {
    this.homeSelected.emit();
  }
}
