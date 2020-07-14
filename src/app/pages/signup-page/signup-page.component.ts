import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { AuthResponse } from 'src/app/types/authResponse.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss'],
})
export class SignupPageComponent implements OnInit {
  signupForm = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  isLoading = false;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  signup() {
    this.isLoading = true;

    const signupData = {
      username: this.signupForm.username,
      email: this.signupForm.email,
      password: this.signupForm.password,
    };

    this.authService.signup(signupData).subscribe((response: AuthResponse) => {
      this.authService.setToken(response.jwt);
      this.userService.setUser(response.user);
      this.userService.getUserDetails();
    });

    this.isLoading = false;

    this.router.navigateByUrl('/');
  }
}
