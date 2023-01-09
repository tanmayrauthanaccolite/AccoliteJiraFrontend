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

  getAlltaskofProjectofEmployee(employeeid:any){
    console.log("http://localhost:8080/jira/unAddedTasks/" +this.projectid+ "/sprint/"+employeeid);
    return this.http.get("http://localhost:8080/jira/unAddedTasks/" +this.projectid+ "/sprint/"+employeeid);
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
    console.log("hiinsidegetemployee");
    this.employeeObservable.next(employee);
  }
  getAllTasksOfSprint(projectId:any)
  {
    console.log(projectId);
    return this.http.get("http://localhost:8080/sprint/currentsprint/"+projectId);
  }
  getSprintsOfProject(projectid:any){
    return this.http.get("http://localhost:8080/projects/sprintdropdown/"+projectid);
  }
  addTaskToSprint(sprintid,taskid)
  {
    console.log("http://localhost:8080/sprint/"+sprintid+"/jiras/"+taskid);
    console.log(this.http.put("http://localhost:8080/sprint/"+sprintid+"/jiras/"+taskid,{}));
    return this.http.put("http://localhost:8080/sprint/"+sprintid+"/jiras/"+taskid,{});
  }
  getTasksOfSpecificSprint(sprintid)
  {
    return this.http.get("http://localhost:8080/jira/viewTasksOfSprint/"+sprintid);
  }
  }