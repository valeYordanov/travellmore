import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from 'src/app/user/user-type/user';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  handleError(err: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurs!';
    if (!err.error || !err.error.error.message) {
      return throwError(() => {
        return new Error(errorMessage);
      });
    }
    switch (err.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already!';
        break;
      case 'INVALID_LOGIN_CREDENTIALS':
        errorMessage = 'Password or email is incorrect!';
        break;
    }

    return throwError(() => {
      return new Error(errorMessage);
    });
  }

  register(email: string, password: string): Observable<User> {
    return this.http
      .post<User>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDe3KUweEF4senBxupnlBuNi2qdQe-wZN8',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(catchError(this.handleError));
  }
  login(email: string, password: string): Observable<User> {
    return this.http
      .post<User>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDe3KUweEF4senBxupnlBuNi2qdQe-wZN8',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(catchError(this.handleError));
  }
}
