import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Epic } from './epic';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class EpicService {

  constructor(private http :HttpClient) { }
  epic():Observable<Epic[]>{
    var value= this.http.get<Epic[]>("http://localhost:8080/project/epic");
    return value;
  }
}
