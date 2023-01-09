import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import {Employee} from '../employee';
import { Jira } from '../jira';
import { Project } from '../project';
import { ProjectService } from '../services/project.service';
import { Epic } from '../epic';
import { CreateSprintService } from '../services/create-sprint.service';
import { CreateSprintComponent } from '../create-sprint/create-sprint.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
constructor(public taskservice:TaskService,
  public projectService :ProjectService,
  public createSprintFormService : CreateSprintService,
  public dialog : MatDialog,
  public sprintService:CreateSprintService
  ){}
phase=["To-Do","In Progress","Done"]
tasks:any;
curemployee:any;
currEpic:any;
project:any;
employees:any;
projectId:any;
Epics:any;
sprintAll:any;
othertasks:any;
curSprint:any;
unassignedTasks:any;
ngOnInit():void{
this.taskservice.getSprintsOfProject(this.taskservice.projectid).subscribe((data)=>{this.sprintAll=data});
if(this.taskservice.jiraid==undefined)
{
    this.projectService.getProjectByProjectID(this.taskservice.projectid).subscribe((value)=>{
    this.project=value;
    this.projectId=this.taskservice.projectid;
    this.employees=this.project.employees;
    console.log(this.employees);
    console.log(value);
    this.taskservice.getAllTasksOfSprint(this.project.projectId).subscribe((data)=>{
      this.tasks=data;
      console.log(data);
    });
    this.taskservice.getEpicByProjectID(this.project.projectId).subscribe((value)=>{
      this.Epics=value;
    });
  });
}
else
{
  this.taskservice.getTaskofEpic().subscribe((data)=>{this.tasks=data;
    console.log(data);
    });
    this.taskservice.getProjectByepicId().subscribe((data)=>{
      this.projectId=data;
      this.projectService.getProjectByProjectID(this.projectId).subscribe((value)=>{
        this.project=value;
        this.employees=this.project.employees;
        console.log(value);
      });
      this.taskservice.getEpicByProjectID(this.projectId).subscribe((value)=>{
        this.Epics=value;
      });
    })
    this.taskservice.epic.subscribe((value)=>{
      this.currEpic=value;
    })
}
this.taskservice.employeeObservable.subscribe((data)=>{
  this.curemployee=data;
  console.log(data);
  console.log(this.curemployee.employeeId)
    this.taskservice.getAlltaskofProjectofEmployee(this.curemployee.employeeId).subscribe((data)=>{
      this.unassignedTasks=data;
      console.log("hii")
      console.log(this.unassignedTasks);
    })
});
// this.taskservice.getalltask().subscribe((data)=>{
//   this.tasks=data;
// })
}


// this.sprintService.getOtherTasksOfEmployee(this.curemployee,this.)
openNav() {
  document.getElementById("mySidenav").style.width="250px";
}
closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
onCreateSprint(){
  console.log(this.createSprintFormService.createSprintForm)
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  this.sprintService.project=this.project;
  this.dialog.open(CreateSprintComponent,{height: '95%',
  width: '60%',});
  this.sprintAll.push(this.createSprintFormService.newsprint);
}
EmpAllTask(employeeId){
this.taskservice.getAllTaskOfEmployeeOfEpic(employeeId,this.projectId).subscribe((value)=>this.tasks=value);
}
taskOfEpic(jiraId){
this.taskservice.jiraid=jiraId;
this.taskservice.getTaskofEpic().subscribe((value)=>this.tasks=value);
this.ngOnInit;
}
AddTaskToSprint(task){
  console.log(task.jiraId);
  for(var sprint of this.sprintAll)
  {
    console.log(sprint);
    if(sprint.current==1)
      this.curSprint=sprint;
  }
  this.taskservice.addTaskToSprint(this.curSprint.sprintId,task.jiraId).subscribe((d)=>{
    this.tasks.push(task);
    console.log(d);
  });
  this.taskservice.jiraid=undefined;
  this.ngOnInit;
}
ViewSprint(sprint)
{
    console.log(this.projectId);
    console.log(sprint.sprintId);
    this.taskservice.getTasksOfSpecificSprint(sprint.sprintId).subscribe((data)=>{
    this.tasks=data;
    console.log(this.projectId);
    this.ngOnInit;
  });
}

}