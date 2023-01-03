import { Component } from '@angular/core';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';
import { CreateSprintService } from '../services/create-sprint.service';

@Component({
  selector: 'app-create-sprint',
  templateUrl: './create-sprint.component.html',
  styleUrls: ['./create-sprint.component.css']
})
export class CreateSprintComponent {
constructor(public createSprintFormService : CreateSprintService,
  public dialogRef : MatDialogRef<CreateSprintComponent>,
  public dialog : MatDialog){}


  saveSprint(){
    // console.log(this.createProjectFormService.createProjectForm.value)
    console.log(this.createSprintFormService.createSprintForm.value)
    this.createSprintFormService.saveSprintData(this.createSprintFormService.createSprintForm.value).subscribe((result) => {console.log(result)});
  }

  onClear(){
    this.createSprintFormService.createSprintForm.reset();
  }
  
  onNoClick(): void {
    this.dialogRef.close();
    this.createSprintFormService.createSprintForm.reset();
  }

}



