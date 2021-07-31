import { Injectable } from '@angular/core';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  private _isLoggedIn = false;

  login(user: User) {
    if (user.username === 'shenlong' && user.password === '12345') {
      this.isLoggedIn = true;
      return;
    }
    this.isLoggedIn = false;
    throw new Error('Falha ao realizar o login');
  }

  get isLoggedIn() {
    return this._isLoggedIn;
  }

  set isLoggedIn(status: boolean) {
    this._isLoggedIn = status;
  }
}
