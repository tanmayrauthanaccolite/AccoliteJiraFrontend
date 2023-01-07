import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http :HttpClient) { }
  
  getProjectOfEmployees(alias:String)
  {
    return this.http.get("http://localhost:8080/projects/viewProjectbyAlias/"+alias);
  }

  getEpicsOfProject(projectId:number)
  {
    //change api
    return this.http.get("http://localhost:8080/jira/getEpics/"+projectId);
  }
}
