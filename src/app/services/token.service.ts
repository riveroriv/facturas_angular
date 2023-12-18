import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TokenService implements HttpInterceptor {

  constructor(
    private auth: AuthService
    ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if( this.auth.getToken()!=null ){
      request = request.clone({
        headers:  request.headers.set (
          'authorization', `Bearer ${this.auth.getToken()}`
        )
      });
    } else {
      request = request.clone()
    }
    
    return next.handle(request);
  }
}