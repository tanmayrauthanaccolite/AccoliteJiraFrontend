import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable, Input } from '@angular/core';
//import { Epic } from './epic';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  url="http://localhost:8080/tasks/view/";
  epicObservable=new Subject<any>();
epic =new Subject<any>();
employeeObservable=new Subject<any>();
@Input() projectid:number;
@Input() jiraid:number;
  constructor(private http :HttpClient) { }

  getalltask(){
    return this.http.get("http://localhost:8080/jira/getallTask/"+this.projectid);
  }
  getTaskofEpic(){
    return this.http.get("http://localhost:8080/jira/viewtasksofepic/"+this.jiraid);
  }
  getProjectByepicId(){
    return this.http.get("http://localhost:8080/jira/getProjectId/project/"+this.jiraid);
  }
  getAllTaskOfEmployeeOfEpic(employeeId:number,projectid:number){
    return this.http.get("http://localhost:8080/jira/getTaskOfEmployee/"+employeeId+"/project/"+projectid);
  }
  getEpicByProjectID(projectId:number){
return this.http.get("http://localhost:8080/jira/getEpics/"+projectId);
  }
  getEpicID(epic:any){
  this.epic.next(epic);
  }
  getEmployee(employee:any)
  {
    this.employeeObservable.next(employee);
  }
}