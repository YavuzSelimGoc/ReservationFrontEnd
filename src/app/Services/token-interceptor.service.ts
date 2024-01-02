import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor  {

  constructor(private authService:AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let jwtToken=req.clone({
     setHeaders:{
       Authorization: 'Bearer '+this.authService.getTokenData(),
     }
   
    })
    return next.handle(jwtToken)
 
    }
}