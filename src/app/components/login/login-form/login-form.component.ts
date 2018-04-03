import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { LoginDetails } from '../../../models/LoginDetails';

// Declaring Materialize as type any for using Materialize toast within typescript.
declare let Materialize;

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  // Declaring local variables.
  email: string;
  password: string;

  // Using ViewChild to assign a local variable to the DOM form element.
  @ViewChild('loginForm') form: any;

  constructor(private authService: AuthService, private router: Router) {}

  // Upon the initializing of this component call the getAuth method from the auth service, if authenticated navigate to the edit page.
  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.router.navigate([`edit`]);
      }
    });
  }

  // Method for authentication, called when form is submitted.
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
