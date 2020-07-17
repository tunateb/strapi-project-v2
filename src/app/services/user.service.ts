import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../types/user.type';
import { environment as env } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user: User;

  token = window.localStorage.getItem('token');

  httpOptions = {
    headers: { Authorization: `Bearer ${this.token}` },
  };

  constructor(private http: HttpClient, private router: Router) {}

  setUser(user: User = null) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }

  tryLogin() {
    const token = window.localStorage.getItem('token');

    if (!token) return;

    return this.http
      .get(`${env.usersApiURL}/me`, this.httpOptions)
      .subscribe((response: User) => {
        this.user = response;
        this.getUserDetails();
      });
  }

  getUserDetails() {
    this.http
      .get(`${env.usersApiURL}/${this.user.id}`, this.httpOptions)
      .subscribe((response: any) => {
        if (response.avatar) {
          this.user.profileImgUrl = `${env.baseApiURL}${response.avatar.url}`;
        } else {
          this.user.profileImgUrl = 'assets/avatar-placeholder.png';
        }
      });
  }

  updateUser(updatedUser: User) {
   return this.http.put(
      `${env.usersApiURL}/${updatedUser.id}`,
      updatedUser,
      this.httpOptions
    );
  }
}
