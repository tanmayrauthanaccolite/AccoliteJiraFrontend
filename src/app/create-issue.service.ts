import { Injectable } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CreateIssueService {

  constructor() { }

  createIssueForm : FormGroup = new FormGroup({
    issueType : new FormControl(0,Validators.required),
    issueStatus : new FormControl('',Validators.required),
    issuePriority : new FormControl('1'),
    issueSummary : new FormControl('',Validators.required),
    issueDescription : new FormControl(''),
    issueAssignee : new FormControl('',Validators.required),
    issueReporter : new FormControl('',Validators.required),
    issueStartDate : new FormControl('',Validators.required),
    issueEndDate : new FormControl('',Validators.required)
  
  })
}
