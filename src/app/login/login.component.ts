import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mode: number = 0;
  constructor(private authService: AuthenticationService, private router:Router) { }

  ngOnInit() {
  }
    onLogin(user) {
    this.authService.login(user)
        .subscribe(resp => {
                const jwt = resp.headers.get('Authorization');
                this.authService.saveToken(jwt);
                this.router.navigateByUrl('/tasks');
    }, error1 => {
          console.log(error1);
      this.mode = 1;
    });
    }
}
