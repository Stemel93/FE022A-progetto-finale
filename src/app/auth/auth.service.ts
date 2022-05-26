import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  URL = environment.pathApi;
  private authSubj = new BehaviorSubject<null | User>(null);
  user$ = this.authSubj.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    this.restore();
  }

  login(data: { username: string; password: string }) {
    return this.http.post<User>(`${this.URL}/api/auth/login`, data).pipe(
      tap((data) => {
        console.log(data);
        this.authSubj.next(data);
        localStorage.setItem('user', JSON.stringify(data));
      }),
      catchError(this.findErr)
    );
  }

  signup(data: any) {
    return this.http
      .post<User>(`${this.URL}/api/auth/signup`, data)
      .pipe(catchError(this.findErr));
  }

  logout() {
    this.authSubj.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  restore() {
    const user = localStorage.getItem('user');
    if (!user) {
      return;
    }
    const userData: User = JSON.parse(user);
    this.authSubj.next(userData);
  }

  private findErr(err: any) {
    switch (err.error) {
      case 'Email and password are required':
        return throwError('Email e password sono obbligatorie!');
        break;
      case 'Email already exists':
        return throwError('Utente già registrato');
        break;
      case 'Email format is invalid':
        return throwError('Email non valida');
        break;
      case 'Cannot find user':
        return throwError('Utente inesistente');
        break;
      default:
        return throwError('Compilare correttamente i campi');
    }
  }
}
