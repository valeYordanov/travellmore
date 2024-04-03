import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  
  HttpParams,
} from '@angular/common/http';
import { Observable, catchError, from, map, switchMap } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(private auth: AngularFireAuth) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.auth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return from(user.getIdToken()).pipe(
            switchMap((token) => {
              const authRequest = request.clone({
                params: new HttpParams().set('auth', token),
              });
              

              return next.handle(authRequest);
            }),
            catchError((error) => {
              // Handle error retrieving token
              console.error('Error retrieving token:', error);
              return next.handle(request); // Proceed with original request
            })
          );
        }
        return next.handle(request); // Proceed with original request
      })
    );
  }
}
