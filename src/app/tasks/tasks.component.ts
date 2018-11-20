import { Router } from '@angular/router';
import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(public authentication:AuthenticationService,private router:Router) { }
   private tasks:any;
  ngOnInit() {
    this.authentication.getTasks()
    .subscribe(resp =>
      {this.tasks=resp},
      err=>{
        this.authentication.logOut();
        this.router.navigateByUrl('/login');
      });

  }

  onNewTask(){
    this.router.navigateByUrl('new-task');
  }

}
