import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

//component imports
import { AppComponent } from './app.component';
import { EpicComponent } from './epic/epic.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { CreateSprintComponent } from './create-sprint/create-sprint.component';
import { CreateJiraComponent } from './create-jira/create-jira.component';
import { EpicjiraComponent } from './epicjira/epicjira.component';

//service imports
import { CreateProjectService } from './services/create-project.service';
import { CreateJiraService } from './services/create-jira.service';
import { CreateSprintService } from './services/create-sprint.service';



@NgModule({
  declarations: [
    AppComponent,
    EpicComponent,
    EpicjiraComponent,
    CreateProjectComponent,
    CreateJiraComponent,
    CreateSprintComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CreateProjectService,CreateJiraService,CreateSprintService],
  bootstrap: [AppComponent],
  entryComponents : [],
  exports:[AppComponent]
})
export class AppModule { }
