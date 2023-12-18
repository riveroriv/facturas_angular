import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  hide!: boolean;
  error = false;

  constructor(
    private auth: AuthService,
    private user: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if(this.auth.getToken() != null) {
      this.user.get_user().subscribe({
        next: _ => {
          this.router.navigate(['/inicio']);
        },
        error: _ => {
          this.auth.cleanSession();
        }
      })
    }
  }

  login(username:string, password:string) {
    this.auth.login(username, password).subscribe({
      next: data => {
        this.auth.startSession(data.token);
        this.router.navigate(['/inicio'])
      },
      error: error => {
        this.error=true;
        // snack bar
      }
    })
  }
}
