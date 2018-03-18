import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { LoginDetails } from '../../../models/LoginDetails';

declare let Materialize;

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  email: string;
  password: string;

  @ViewChild('loginForm') form: any;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.router.navigate([`edit`]);
      }
    });
  }

  onSubmit({ value }: { value: LoginDetails }) {
    this.authService
      .login(value.email, value.password)
      .then(res => {
        Materialize.toast('Logging in', 4000, 'green');
        this.router.navigate([`edit`]);
      })
      .catch(err => {
        Materialize.toast(err, 4000, 'red');
      });
  }
}
