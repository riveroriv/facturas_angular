import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from './interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) {
    this.url = environment.host;
  }

  url: string;

  get_user(): Observable<any> {
    return this.http.get(this.url+'/user');
  }

}
