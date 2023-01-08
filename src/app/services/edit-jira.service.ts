import { Injectable } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { MatGridTileHeaderCssMatStyler } from '@angular/material/grid-list';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditJiraService {
  url = 'add url';
  projectObservable=new Subject<any>();
  epicsObservable=new Subject<any>();
  employeeObservable=new Subject<any>();
  newepicObservable=new Subject<any>();
  
  constructor(private http : HttpClient) { }
  editJiraForm : FormGroup = new FormGroup({
    projectName : new FormControl('',Validators.required),
    jiraStatus : new FormControl('',Validators.required),
    jiraTitle : new FormControl('',Validators.required),
    jiraDescription : new FormControl('',Validators.required),
    jiraAssignee : new FormControl('',Validators.required),
    jiraReporter : new FormControl('',Validators.required),
    jiraType : new FormControl('',Validators.required),
    jiraLinkedIssue : new FormControl(),
    jiraProjects : new FormControl('',Validators.required)
  });

  editJiraData(data : any){
    return this.http.post(this.url,data).pipe(tap(()=>{
      this.newepicObservable.next(data);
    })
    )
  }

  getAssignEmployees():Observable<any>{
    return this.http.get("http://localhost:8080/employees/getemployeedropdown");
  }

  getProject(project:any)
  {
    this.projectObservable.next(project);
    //console.log(project);
  }
  getAllEpicsOfProject(epic:any)
  {
    this.epicsObservable.next(epic);
    //console.log(epic);
  }
  getLoggedInUser(employee:any)
  {
    this.employeeObservable.next(employee);
    //console.log(employee);
  }
  getAllEpicOfEmp(alias:string){
    return this.http.get("http://localhost:8080/jira/getAllEpicsOfEmployee/"+alias)
  }

}
