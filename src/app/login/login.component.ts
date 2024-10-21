import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {

  }
  onSubmit() {
    console.warn('Login clicked');
    console.warn('Email:', this.email);
    console.warn('Password:', this.password);

    if (this.email == 'smit.patel@bacancy.com' && this.password == '123') {
      this.router.navigateByUrl('/todo-list');
    }
  }
}
