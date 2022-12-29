import { Component } from '@angular/core';
import { CreateIssueService } from '../create-issue.service';
import { Epic } from '../epic';
import { EpicService } from '../epic.service';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { CreateIssueComponent } from '../create-issue/create-issue.component';
import { CreateProjectService } from '../create-project.service';
import { CreateProjectComponent } from '../create-project/create-project.component';

@Component({
  selector: 'app-epic',
  templateUrl: './epic.component.html',
  styleUrls: ['./epic.component.css']
})
export class EpicComponent {
  constructor(public service:EpicService,
    public createIssueFormService : CreateIssueService,
    public createProjectFormService : CreateProjectService,
    public dialog : MatDialog){

  }
xy = document.getElementById("")
phase=["To-do","In Progress","Done"]
// epics: Epic[] = [
//   {epicId:1, epicLAbel: "Kuch bhi", epicDescription: "I also don't know what to do", assignee:"Tanmay",priority:1,status:"To-Do" ,projectId:1},
//   {epicId:2, epicLAbel: "Kuch bhi", epicDescription: "I also don't know what to do", assignee:"Ritiksha",priority:2,status:"Done" ,projectId:1},
//   {epicId:3, epicLAbel: "Kuch bhi", epicDescription: "I also don't know what to do", assignee:"Tanmay",priority:1,status:"To-Do" ,projectId:1},
//   {epicId:4, epicLAbel: "Kuch bhi", epicDescription: "I also don't know what to do", assignee:"Keerti",priority:3,status:"Done" ,projectId:1},
//   {epicId:5, epicLAbel: "Kuch bhi", epicDescription: "I also don't know what to do", assignee:"Stuti",priority:3,status:"To-Do" ,projectId:1},
//   {epicId:6, epicLAbel: "Kuch bhi", epicDescription: "I also don't know what to do", assignee:"Keerti",priority:1,status:"In Progress" ,projectId:1},
//   {epicId:7, epicLAbel: "Kuch bhi", epicDescription: "I also don't know what to do", assignee:"Keerti",priority:2,status:"In Progress" ,projectId:1},
//   {epicId:8, epicLAbel: "Kuch bhi", epicDescription: "I also don't know what to do", assignee:"Tanmay",priority:1,status:"In Progress" ,projectId:1},
//   {epicId:9, epicLAbel: "Kuch bhi", epicDescription: "I also don't know what to do", assignee:"Tanmay",priority:2,status:"In Progress" ,projectId:1}
// ];
epics:Epic[];

onCreate(){
  console.log(this.createIssueFormService.createIssueForm)
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
 this.dialog.open(CreateIssueComponent,{height: '90%',
 width: '60%',})
}
onCreateProject(){
  console.log(this.createProjectFormService.createProjectForm)
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
 this.dialog.open(CreateProjectComponent,{height: '85%',
 width: '40%',})
}

ngOnInit(){
this.service.epic().subscribe((epicData)=>{this.epics=epicData})
}


}
