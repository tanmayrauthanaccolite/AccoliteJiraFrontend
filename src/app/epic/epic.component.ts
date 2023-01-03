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
phase=["To-do","In Progress","Done"]
epics:Epic[];
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