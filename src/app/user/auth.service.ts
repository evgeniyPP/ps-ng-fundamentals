import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { IUser } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser: IUser;

  constructor(private http: HttpClient) {}

  loginUser(username: string, password: string) {
    return this.http
      .post(
        'https://ngf-server.herokuapp.com/api/login',
        { username, password },
        {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        }
      )
      .pipe(
        tap((data) => {
          this.currentUser = <IUser>data['user'];
        })
      )
      .pipe(
        catchError(() => {
          return of(false);
        })
      );
  }

  isAuth() {
    return !!this.currentUser;
  }

  checkAuthStatus() {
    return this.http
      .get('https://ngf-server.herokuapp.com/api/currentIdentity')
      .pipe(
        tap((data) => {
          if (data) {
            this.currentUser = <IUser>data;
          }
        })
      );
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;

    return this.http.put(
      `https://ngf-server.herokuapp.com/api/users/${this.currentUser.id}`,
      this.currentUser,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      }
    );
  }

  logout() {
    this.currentUser = undefined;

    return this.http.post(
      `https://ngf-server.herokuapp.com/api/logout`,
      {},
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      }
    );
  }
}
