import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Servicio } from './interfaces/servicio';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(
    private http: HttpClient
  ) {
    this.url = environment.host + environment.api_servicios;
  }

  url!: string;

  get(): Observable<any> {
    return this.http.get(this.url);
  }

  create(servicio: Servicio): Observable<any> {
    return this.http.post(this.url, servicio);
  }

  update(servicio: Servicio): Observable<any> {
    return this.http.put(this.url, servicio);
  }

  delete(idServicio: number): Observable<any> {
    return this.http.delete(this.url+"/"+idServicio);
  }

  
}
