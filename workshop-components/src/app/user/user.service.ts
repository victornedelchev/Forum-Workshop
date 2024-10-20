import { Injectable } from '@angular/core';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User | undefined;
  USER_KEY = '[user]';

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor() {
    try {
      const isUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(isUser);
    } catch (err) {
      this.user = undefined;
    }
  }

  login(): void {
    this.user = {
      id: '5fa64b162183ce1728ff371d',
      username: 'victoryo',
      email: 'victor@abv.bg',
      telephone: '0898123456',
      password: '123123',
    };

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }

  logout(): void {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
}
