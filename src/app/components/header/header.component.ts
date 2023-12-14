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
    this.changeSiteName(this.router.url)
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
 
  changeSiteName(site: string) {
    for(let link of this.links){
      if(site.includes(link.text)){
        this.page = link.text;
      }
    }
  }
}
