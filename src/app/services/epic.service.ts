import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Epic } from '../epic';
import {Observable, Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class EpicService {
  // urls:String;
  // project=new Subject<Employee>();
  // constructor(private http :HttpClient) { }
  // epic(id:number):Observable<any>{
  //   this.urls="http://localhost:8080/epics/project/epic/"+id;

  //   return this.http.get("this.urls");
  // }
  projectObservable=new Subject<any>();
  epicsObservable=new Subject<any>();
  employeeObservable=new Subject<any>();
  constructor(private http :HttpClient) { }
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
}
