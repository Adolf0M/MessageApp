import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  formReg: FormGroup;

  constructor(
    private UserService: UserService
  ) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    })
  }

  ngOnInit(): void {
  }
  onSubmit() {
    this.UserService.register(this.formReg.value)
    .then(respone => {console.log(respone)})
    .catch(error => console.log(error));
  }
}
