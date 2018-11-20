import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
constructor(private authSERV:AuthenticationService, private router:Router){}
  onLogOut(){
          this.authSERV.logOut();
          this.router.navigateByUrl('/login');
        }
}
