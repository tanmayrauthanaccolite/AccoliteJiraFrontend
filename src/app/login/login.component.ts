import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private authService:AuthService,
    private router: Router
    ){}
  formGroup : FormGroup;
  ngOnInit(): void {
    this.formGroup=new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }
  checkUser()
  {
    console.log("ho");
    if(this.formGroup.valid)
    {
        console.log(this.formGroup.value);
        this.authService.login(this.formGroup.value).subscribe((result)=>{
        console.log(result);
        this.router.navigate(['/jira']);
      })
    }
  }
}
