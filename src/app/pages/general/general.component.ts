import { Component, OnInit } from '@angular/core';
import { FacturasService } from 'src/app/services/facturas.service';
import { Factura } from 'src/app/services/interfaces/factura';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  
  constructor(
    private facturasService: FacturasService
  ) {}

  ngOnInit(): void {
    this.loadFacturas();
  }
  
  facturas!: Factura[][];

  loadFacturas(){
    this.facturasService.get().subscribe({
      next: data => {
        this.facturas = data;
      },
      error: error => {
        // snack bar
      }
    })
  }

}
