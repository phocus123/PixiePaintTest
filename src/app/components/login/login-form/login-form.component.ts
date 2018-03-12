import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  email: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.router.navigate([`edit-showcase`]);
      }
    });
  }

  onSubmit() {
    this.authService
      .login(this.email, this.password)
      .then(res => {
        this.router.navigate([`edit-showcase`]);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
