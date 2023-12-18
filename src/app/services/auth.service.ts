import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.url = environment.host + environment.api_auth;
  }

  url: string;

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.url+'/signin', {'username':username, 'password': password})
  }
  startSession(token: string) {
    sessionStorage.setItem('token', token);
  }
  cleanSession(){
    sessionStorage.clear();
  }
  getToken(): string|null {
    return sessionStorage.getItem('token');
  }
  gotoLogin() {
    this.router.navigate(['/login']);
  }

}
