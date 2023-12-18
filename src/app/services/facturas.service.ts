import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {
  constructor(
    private http: HttpClient
  ) {
    this.url = environment.host + environment.api_facturas;
  }

  url!: string;

  get(): Observable<any> {
    return this.http.get(this.url);
  }
}
