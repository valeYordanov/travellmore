import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Observable,
  Subject,
  catchError,
  interval,
  map,
  switchMap,
  throwError,
} from 'rxjs';
import { User } from 'src/app/user/user-type/authUser';
import { BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ProfileService } from './profile.service';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class UserService {
  authChange = new Subject<boolean>();

  constructor(
    private afauth: AngularFireAuth,
    private http: HttpClient,
    private router: Router,
    private profileService:ProfileService
  ) {}

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

  register(email: string, password: string) {
    return this.afauth.createUserWithEmailAndPassword(email, password)
  }

  login(email: string, password: string) {
    return this.afauth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.afauth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
