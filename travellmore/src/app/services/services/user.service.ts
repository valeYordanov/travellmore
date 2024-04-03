import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';

import { ProfileService } from './profile.service';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(
    private afauth: AngularFireAuth,

    private router: Router
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
  public getCurrentUserUid(): Observable<string | null> {
    return this.afauth.authState.pipe(map((user) => (user ? user.uid : null)));
  }
}
