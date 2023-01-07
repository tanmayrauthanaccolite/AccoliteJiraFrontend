import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Epic } from '../epic';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-epicjira',
  templateUrl: './epicjira.component.html',
  styleUrls: ['./epicjira.component.css']
})
export class EpicjiraComponent {
@Input() epic :any;
@Input() x : any;

constructor(
  private taskService:TaskService,
  private _router: Router
  ){}

changePriorityColor(num:number){
switch(num){
  case 1 :return 'green';
  case 2 :return 'yellow';
  case 3 :return 'red';
  default: return 'green';
}
}
displayTasks()
{
  console.log("hi");
  this.taskService.displayTasks();
  this._router.navigate(['/sprint']);
}

editJira(){
  console.log("Hi");
}
}
