import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EpicComponent } from './epic/epic.component';
import { EpicjiraComponent } from './epicjira/epicjira.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { CreateIssueComponent } from './create-issue/create-issue.component'
import { CreateIssueService } from './create-issue.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateProjectComponent } from './create-project/create-project.component';
import { CreateProjectService } from './create-project.service';

@NgModule({
  declarations: [
    AppComponent,
    EpicComponent,
    EpicjiraComponent,
    CreateIssueComponent,
    CreateProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [CreateIssueService,CreateProjectService],
  bootstrap: [AppComponent],
  entryComponents : [CreateIssueComponent],
  exports:[AppComponent]
})
export class AppModule { }
