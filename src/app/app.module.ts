import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EpicComponent } from './epic/epic.component';
import { EpicjiraComponent } from './epicjira/epicjira.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from'@angular/material/icon'
import {MatCardModule} from '@angular/material/card'
import { HttpClientModule } from '@angular/common/http';
import { TaskComponent } from './task/task.component';
import { TaskjiraComponent } from './taskjira/taskjira.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IgxDropDownModule, IgxButtonModule, IgxToggleModule } from 'igniteui-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    EpicComponent,
    EpicjiraComponent,
    TaskComponent,
    TaskjiraComponent,
    LoginComponent
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
   NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[AppComponent]
})
export class AppModule { }
