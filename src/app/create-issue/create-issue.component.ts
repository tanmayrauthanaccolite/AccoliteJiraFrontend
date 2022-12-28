import { Component } from '@angular/core';
import { CreateIssueService } from '../create-issue.service';
import { MatDialog,MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-issue',
  templateUrl: './create-issue.component.html',
  styleUrls: ['./create-issue.component.css']
})
export class CreateIssueComponent {

  constructor(public createIssueFormService : CreateIssueService,
    public dialogRef: MatDialogRef<CreateIssueComponent>,
    public dialog : MatDialog){}

  data : any;


onCreateIssue(){
  this.data = this.createIssueFormService.createIssueForm.value;
  this.createIssueFormService.createIssueForm.reset();
  console.log(this.data);
}
  onClear(){
    this.createIssueFormService.createIssueForm.reset();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
