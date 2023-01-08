import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
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
  errormessage;
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
        setTimeout(()=>{
            this.authService.passEmployee(result);
        }, 1000);
        console.log(result);
        this.router.navigate(['/jira',result.alias]);
      },
      (error)=>{
        this.errormessage=error.error.message;
        console.log(this.errormessage);
      }
      )
    }
  }
}
