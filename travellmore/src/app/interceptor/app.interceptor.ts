import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  
  HttpParams,
} from '@angular/common/http';
import { Observable, catchError, from, map, mergeMap, switchMap } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Token } from '@angular/compiler';
import { UserService } from '../services/services/user.service';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(private auth: AngularFireAuth) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return from(this.auth.currentUser.then(user => user?.getIdToken()).catch(err => {})).pipe(switchMap(token => {
      if (token) {
        
        request = request.clone({
          setHeaders: {
             "auth" : token
          }
        
        });
        
        
        
      }
      return next.handle(request);
    }));
  }
  
}
