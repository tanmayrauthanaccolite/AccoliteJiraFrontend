import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  login(data):Observable<any>
  {
    console.log(data);
    // console.log(this.http.get('http://localhost:8080/checkcredentials',data));
    return this.http.post('http://localhost:8080/checkcredentials',data,{responseType: 'text'});
  }
}
