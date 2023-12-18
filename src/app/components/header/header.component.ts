import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/services/interfaces/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  
  @Input() user!: User;

  constructor(
    public router: Router,
    private auth: AuthService
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

  logout() {
    this.auth.cleanSession();
    this.router.navigate(['/login']);
  }

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
