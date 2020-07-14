import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private userService: UserService) {}

  login(loginData) {
    return this.http.post(`${env.authApiURL}/local`, loginData);
  }

  logout() {
    window.localStorage.removeItem('token');
    this.userService.setUser();
  }

  signup(signupData) {
    return this.http.post(`${env.authApiURL}/local/register`, signupData);
  }

  setToken(token: string) {
    window.localStorage.setItem('token', token);
  }
}
