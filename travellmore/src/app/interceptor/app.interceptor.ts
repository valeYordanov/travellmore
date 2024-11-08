import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable, from, switchMap } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(private auth: AngularFireAuth) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return from(
      this.auth.currentUser
        .then((user) => user?.getIdToken())
        .catch((err) => {})
    ).pipe(
      switchMap((token) => {
        if (token) {
          request = request.clone({
            setHeaders: {
              auth: token,
            },
          });
        }
        return next.handle(request);
      })
    );
  }
}
