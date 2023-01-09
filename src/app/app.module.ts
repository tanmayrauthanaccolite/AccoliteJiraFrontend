import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { EpicComponent } from './epic/epic.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { CreateSprintComponent } from './create-sprint/create-sprint.component';
import { CreateJiraComponent } from './create-jira/create-jira.component';
import { EpicjiraComponent } from './epicjira/epicjira.component';
import { MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from'@angular/material/icon'
import {MatCardModule} from '@angular/material/card'
import { TaskComponent } from './task/task.component';
import { TaskjiraComponent } from './taskjira/taskjira.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IgxDropDownModule, IgxButtonModule, IgxToggleModule } from 'igniteui-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//service imports
import { CreateProjectService } from './services/create-project.service';
import { CreateJiraService } from './services/create-jira.service';
import { CreateSprintService } from './services/create-sprint.service';
import { ProjectInfoComponent } from './epic/project-info/project-info.component';
import { UserInfoComponent } from './epic/user-info/user-info.component';
import { AddPeopleComponent } from './epic/add-people/add-people.component';
import { EditJiraComponent } from './edit-jira/edit-jira.component';
import { EpicInfoComponent } from './task/epic-info/epic-info.component';
@NgModule({
  declarations: [
    AppComponent,
    EpicComponent,
    EpicjiraComponent,
    TaskComponent,
    TaskjiraComponent,
    LoginComponent,
    CreateProjectComponent,
    CreateJiraComponent,
    CreateSprintComponent,
    ProjectInfoComponent,
    UserInfoComponent,
    AddPeopleComponent,
    EditJiraComponent,
    EpicInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    IgxDropDownModule,
	  IgxButtonModule,
	  IgxToggleModule,
    NgbModule,
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
