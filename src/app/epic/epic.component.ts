import { Component } from '@angular/core';
import { Epic } from '../epic';
import { EpicService } from '../services/epic.service';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { CreateProjectService } from '../services/create-project.service';
import { CreateProjectComponent } from '../create-project/create-project.component';
import { CreateJiraService } from '../services/create-jira.service';
import { CreateJiraComponent } from '../create-jira/create-jira.component';
import { CreateSprintService } from '../services/create-sprint.service';
import { CreateSprintComponent } from '../create-sprint/create-sprint.component';

@Component({
  selector: 'app-epic',
  templateUrl: './epic.component.html',
  styleUrls: ['./epic.component.css']
})
export class EpicComponent {
  constructor(
    public service:EpicService,
    public createJiraFormService : CreateJiraService,
    public createProjectFormService : CreateProjectService,
    public createSprintFormService : CreateSprintService,
    public dialog : MatDialog
    ){
  }
xy = document.getElementById("")
phase=["To-do","In Progress","Done"]
epics:Epic[];

onCreateJira(){
  console.log(this.createJiraFormService.createJiraForm)
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
 this.dialog.open(CreateJiraComponent,{height: '95%',
 width: '60%',})
}
onCreateProject(){
  console.log(this.createProjectFormService.createProjectForm)
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
 this.dialog.open(CreateProjectComponent,{height: '70%',
 width: '40%'});
}

onCreateSprint(){
  console.log(this.createSprintFormService.createSprintForm)
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
 this.dialog.open(CreateSprintComponent,{height: '95%',
 width: '60%',})
}

ngOnInit(){
this.service.epic().subscribe((epicData)=>{this.epics=epicData
});
}
// nav function
 openNav() {
  document.getElementById("mySidenav").style.width="250px";
}
closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
}