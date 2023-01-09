import { Component, Input } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import { Task } from '../task';

@Component({
  selector: 'app-taskjira',
  templateUrl: './taskjira.component.html',
  styleUrls: ['./taskjira.component.css']
})
export class TaskjiraComponent {
  @Input() task :any;
  @Input() x : any;
  tasks:any;
  ngOnInit(){
    this.tasks=this.task
    console.log("Hello")
    console.log(this.tasks)
  }
  editTask(task:any){
    // console.log(this.editJiraService.editJiraForm)
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    // setTimeout(()=>{
    //   this.editJiraService.getProject(this.tasks.jiraprojects.projectId);
    //   this.editJiraService.getLoggedInUser(this.employee);
    // }, 1000);
    // this.dialog.open(EditJiraComponent,{height: '70%',
    // width: '40%'});
  }
  

  changePriorityColor(num:number){
    switch(num){
      case 1 :return 'green';
      case 2 :return 'yellow';
      case 3 :return 'red';
      default: return 'green';
    }
  }
}
