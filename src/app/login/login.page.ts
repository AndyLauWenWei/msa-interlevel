import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;
  loginError: string;

  constructor(private router: Router,
              private authService: AuthService) {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    })
  }

  login() {
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password) 
    .then( user => {
      if (this.loginForm.value.email == 'manager@nyp.sg'){
        this.router.navigate(['/tabs/manage']); // if manager@nyp.sg then navigate to manage
      }
      else {
        this.router.navigate(['tabs/new-loan']); // else navigate to new-loan
      }

  })
      .catch(
      error => this.loginError = error.message
      );
  }
}
