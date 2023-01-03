import { Component } from '@angular/core';
import { CreateJiraService } from '../services/create-jira.service';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-jira',
  templateUrl: './create-jira.component.html',
  styleUrls: ['./create-jira.component.css']
})
export class CreateJiraComponent{

  constructor(public createJiraFormService : CreateJiraService,
    public dialogRef : MatDialogRef<CreateJiraComponent>,
    public dialog : MatDialog){}

    data : any;
    assignEmployee : String[];

    onClear(){
      this.createJiraFormService.createJiraForm.reset();
    }

    onNoClick(): void {
      this.dialogRef.close();
      this.createJiraFormService.createJiraForm.reset();
    }

    saveJira(){
      console.log(this.createJiraFormService.createJiraForm.value)
      this.createJiraFormService.saveJiraData(this.createJiraFormService.createJiraForm.value).subscribe((result) => {console.log(result)});
    }

    ngOnInit():void{
    this.createJiraFormService.getAssignEmployees().subscribe((employeeArray)=>{this.assignEmployee=employeeArray});
    this.createJiraFormService.getAssignEmployees().subscribe((employeeArray)=>console.log(employeeArray));
    }
}
