import { Component } from '@angular/core';
import { MatDialog,MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { CreateProjectService } from '../create-project.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent {

  constructor(public createProjectFormService : CreateProjectService,
    public dialogRef: MatDialogRef<CreateProjectComponent>,
    public dialog : MatDialog){}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onClear(){
    this.createProjectFormService.createProjectForm.reset();
  }

  saveProject(){
    console.log(this.createProjectFormService.createProjectForm.value)
  }

}
