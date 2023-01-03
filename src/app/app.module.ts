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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TaskdetailsComponent } from './taskdetails/taskdetails.component';
@NgModule({
  declarations: [
    AppComponent,
    EpicComponent,
    EpicjiraComponent,
    TaskdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[AppComponent]
})
export class AppModule { }
