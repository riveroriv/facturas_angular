import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/services/interfaces/servicio';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  
  constructor(
    private servicioService: ServicioService
  ) {}

  ngOnInit(): void {
    this.loadServices()
  }

  servicios!: Servicio[];
  servicio!: Servicio;
  empresas = [
    {
      nombre: "Tigo",
      service: "001" 
    }, {
      nombre: "Cre",
      service: "002" 
    }
  ]

  loadServices() {
    this.servicioService.get().subscribe({
      next: data => {
        this.servicios = data;
      },
      error: error => {
        // snack bar
      }
    })
  }
  select(servicio: Servicio) {
    this.servicio = servicio;
  }

  delete(servicio: Servicio) {
    this.servicioService.delete(servicio.id).subscribe({
      next: _ => {
        this.loadServices();
      },
      error: error => {
        // snack bar
      }
    })
  }

  create( name:string, code:string, empresa:string ) {
    let servicio: Servicio = {
      name: name,
      clientNumber: code,
      service: empresa,
      owner: 0,
      id: 0
    }
    this.servicioService.create(servicio).subscribe({
      next: _ => {
        this.loadServices();
      },
      error: error => {
        // snack bar
      }
    })
  }



}
