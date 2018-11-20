import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
private tastks;
private mode:number;
  constructor(private authSERV:AuthenticationService) { }

  ngOnInit() {
  }

  onSaveTask(task){
    this.authSERV.saveTask(task)
    .subscribe(resp=>{
        this.tastks=resp;
        this.mode=2;
    },err=>{
      this.mode=0;
    });
  }

}
