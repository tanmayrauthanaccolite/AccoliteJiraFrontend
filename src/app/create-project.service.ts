import { Injectable } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CreateProjectService {

  constructor() { }

  createProjectForm : FormGroup = new FormGroup({
    projectLabel : new FormControl('',Validators.required),
    projectDescription : new FormControl('',Validators.required),
    projectStartDate : new FormControl('',Validators.required)
  });

}
