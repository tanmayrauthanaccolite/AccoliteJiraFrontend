import { Injectable } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { MatGridTileHeaderCssMatStyler } from '@angular/material/grid-list';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditJiraService {
  url = 'http://localhost:8080/jira/updateJira/';
  projectObservable=new Subject<any>();
  epicsObservable=new Subject<any>();
  employeeObservable=new Subject<any>();
  newepicObservable=new Subject<any>();
  defaultEpic=new Subject<any>();
  currEpic:any;
  project:any;
  employee:any;
  editJiraForm : FormGroup;
  constructor(private http : HttpClient) { }

  editJiraData(data : any){
    console.log(data);
    console.log(data.jiraId);
    console.log(this.url + data.jiraId,data)
    return this.http.post(this.url + data.jiraId,data).pipe(tap(()=>{
      this.newepicObservable.next(data);
    })
    )
  }

  getAssignEmployees():Observable<any>{
    return this.http.get("http://localhost:8080/employees/getemployeedropdown");
  }

  getProject(project:any)
  {
    this.project=project;
    this.projectObservable.next(project);
    //console.log(project);
  }
  getLoggedInUser(employee:any)
  {
    this.employee=employee;
    this.employeeObservable.next(employee);
    //console.log(employee);
  }
  getAllEpicOfEmp(alias:string){
    return this.http.get("http://localhost:8080/jira/getAllEpicsOfEmployee/"+alias)
  }
  getEpic(epic)
  {
    this.currEpic=epic;
    this.epicsObservable.next(epic);
  }
  getAllEpicsOfProject(epic){
    this.epicsObservable.next(epic);
  }
  setCurrEpic(){
    console.log(this.currEpic)
    console.log("Hiii I am here")
    this.editJiraForm.get('projectName').setValue(this.currEpic.jiraprojects.projectName);
    this.editJiraForm.get('jiraTitle').setValue(this.currEpic.jiraTitle);
    this.editJiraForm.get('jiraStatus').setValue(this.currEpic.jiraStatus);
    this.editJiraForm.get('jiraDescription').setValue(this.currEpic.jiraDescription);
    this.editJiraForm.get('jiraAssignee').setValue(this.currEpic.jiraAssignee);
    this.editJiraForm.get('jiraReporter').setValue(this.currEpic.jiraReporter);
    this.editJiraForm.get('jiraType').setValue(this.currEpic.jiraType);
    this.editJiraForm.get('jiraProjects').setValue(this.currEpic.jiraProjects);
    this.editJiraForm.get('jiraPriority').setValue(this.currEpic.jiraPriority);
    this.editJiraForm.get('jiraLinkedIssue').setValue("None");
     }
    initilizeform()
    {
        this.editJiraForm= new FormGroup({
        projectName : new FormControl(),
        jiraStatus : new FormControl(this.currEpic.jiraStatus),
        jiraTitle : new FormControl(this.currEpic.jiraTitle),
        jiraDescription : new FormControl(this.currEpic.jiraDescription),
        jiraAssignee : new FormControl(''),
        jiraReporter : new FormControl(this.currEpic.jiraReporter),
        jiraType : new FormControl(''),
        jiraLinkedIssue : new FormControl('None'),
        jiraProjects : new FormControl(''),
        jiraPriority:new FormControl('')
      })
    }

}
