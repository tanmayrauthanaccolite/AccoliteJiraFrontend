import { Component } from '@angular/core';
import { Epic } from '../epic';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
constructor(public taskservice:TaskService){}
phase=["To-Do","In Progress","Done"]
tasks:Task[];
ngOnInit():void{
//this.taskservice.epicObservable.subscribe((EpicData)=>{console.log(EpicData)});
this.taskservice.getAllTasks().subscribe((tasksArray)=>{this.tasks=tasksArray});
this.taskservice.getAllTasks().subscribe((tasksArray)=>console.log(tasksArray));
}
}