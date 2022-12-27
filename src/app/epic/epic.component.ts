import { Component } from '@angular/core';
import { Epic } from '../epic';
import { EpicService } from '../epic.service';
@Component({
  selector: 'app-epic',
  templateUrl: './epic.component.html',
  styleUrls: ['./epic.component.css']
})
export class EpicComponent {
  constructor(public service:EpicService){

  }
xy = document.getElementById("")
phase=["To-Do","In Progress","Done"]
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
ngOnInit(){
this.service.epic().subscribe(epicData=>this.epics=epicData)
}
}
