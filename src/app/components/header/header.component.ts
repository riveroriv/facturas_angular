import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(
    public router: Router
  ) {}

  ngOnInit(): void {
    // this.page = this.links[this.router.url];
  }

  page: string = 'inicio';
  
  // links = {
  //   '/inicio': 'inicio',
  //   '/servicios': 'servicios',
  //   '/about': 'about'
  // }

  links = [
    {text: "inicio", path: "/inicio"},
    {text: "servicios", path: "/servicios"},
    {text: "about", path: "/about"}
  ]
}
