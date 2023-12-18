import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../services/interfaces/user';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  user!: User;

  constructor(
    private auth: AuthService,
    private userSerice: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if(this.auth.getToken() != null) {
      this.userSerice.get_user().subscribe({
        next: data => {
          this.user = data;
        },
        error: _ => {
          this.auth.cleanSession();
          this.auth.gotoLogin();
        }
      })
    } else {
      this.auth.gotoLogin();
    }
  }
}
