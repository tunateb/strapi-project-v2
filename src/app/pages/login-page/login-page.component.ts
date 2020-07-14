import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AuthResponse } from 'src/app/types/authResponse.type';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  isLoading = false;

  loginForm = {
    identifier: '',
    password: '',
  };

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    this.isLoading = true;

    this.authService
      .login(this.loginForm)
      .subscribe((response: AuthResponse) => {
        this.authService.setToken(response.jwt);
        this.userService.setUser(response.user);
        this.userService.getUserDetails();
      });

    this.isLoading = false;

    this.loginForm = {
      identifier: '',
      password: '',
    };

    this.router.navigateByUrl('/');
  }
}
