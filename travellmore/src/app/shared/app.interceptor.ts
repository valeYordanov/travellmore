import { Injectable, Provider } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { ErrorService } from './services/error.service';

@Injectable({providedIn:'root'})
class AppInterceptor implements HttpInterceptor {
  constructor(private errorService: ErrorService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err) => {
        
        return [err];
      })
    );
  }
}

export const appInterceptorProvider: Provider = {
  useClass: AppInterceptor,
  multi: true,
  provide: HTTP_INTERCEPTORS,
};
