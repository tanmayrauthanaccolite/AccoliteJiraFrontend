import { Component } from '@angular/core';
import { Epic } from '../epic';
import { Task } from '../task';
import { TaskService } from '../task.service';
import {Employee} from '../employee';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
constructor(public taskservice:TaskService){}
phase=["To-Do","In Progress","Done"]
tasks:Task[];
employees:Employee[];
ngOnInit():void{
this.taskservice.getAllTasks().subscribe((tasksArray)=>{this.tasks=tasksArray});
this.taskservice.getEmployees().subscribe((data)=>{this.employees=data;console.log(data);console.log(this.employees);});
}
// nav function
openNav() {
  document.getElementById("mySidenav").style.width="250px";
}
closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
getJiraOfEmployee(alias:String)
{
  console.log("hiiii");
  this.taskservice.getTasksofEmployee(alias).subscribe((tasksArray)=>{this.tasks=tasksArray;console.log(this.tasks);});
}

}