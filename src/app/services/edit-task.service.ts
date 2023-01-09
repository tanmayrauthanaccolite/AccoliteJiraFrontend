import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EditTaskService {

  constructor(private http : HttpClient) { }
  // editJiraForm : FormGroup = new FormGroup({
  //   projectName : new FormControl('',Validators.required),
  //   jiraStatus : new FormControl('',Validators.required),
  //   jiraTitle : new FormControl('',Validators.required),
  //   jiraDescription : new FormControl('',Validators.required),
  //   jiraAssignee : new FormControl('',Validators.required),
  //   jiraReporter : new FormControl('',Validators.required),
  //   jiraType : new FormControl('',Validators.required),
  //   jiraLinkedIssue : new FormControl(),
  //   jiraProjects : new FormControl('',Validators.required)
  // });
}
