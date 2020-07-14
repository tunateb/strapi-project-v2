import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../types/user.type';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User;

  token = window.localStorage.getItem('token');

  httpOptions = {
    headers: { Authorization: `Bearer ${this.token}` },
  };

  constructor(private http: HttpClient) {}

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
}
