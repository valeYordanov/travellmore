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
    private profileService: ProfileService
  ) {}

  handleError(error: any): any {
    console.error('An error occurred:', error);

    let errorMessage: string;

    switch (error.code) {
      case 'auth/email-already-in-use':
        errorMessage = 'Email is already in use.';
        break;
      case 'auth/invalid-email':
        errorMessage = 'Invalid email.';
        break;
      case 'auth/operation-not-allowed':
        errorMessage = 'Operation not allowed.';
        break;
      case 'auth/weak-password':
        errorMessage =
          'Weak password. Password should be at least 6 characters.';
        break;
      case 'auth/invalid-credential':
        errorMessage = 'Email or password does not exist!';
        break;
      default:
        errorMessage = 'An error occurred during authentication.';
    }

    return new Error(errorMessage);
  }

  register(email: string, password: string) {
    return this.afauth.createUserWithEmailAndPassword(email, password);
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
