import { Injectable } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CreateSprintService {
  url = 'http://localhost:8080/sprint/addSprint';
  constructor(private http : HttpClient) { }
  project:any;
  newsprint:any;
  createSprintForm : FormGroup = new FormGroup({
    projectId : new FormControl('',Validators.required),
    allottedTime : new FormControl('',Validators.required),
    sprintDescription : new FormControl('',Validators.required),
    startDate : new FormControl('',Validators.required),
    endDate : new FormControl('',Validators.required),
    sprintOfProject:new FormControl('')
  });

  saveSprintData(data : any){
    console.log(data);
    return this.http.post(this.url,data);
  }
  getTaskOfSprint(){
    return this.http.get("http://localhost:8080/sprint/viewSprint")
  }
  
}

