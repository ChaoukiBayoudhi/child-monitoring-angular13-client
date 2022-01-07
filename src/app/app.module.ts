import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddParentComponent } from './components/parent/add-parent/add-parent.component';
import { ListParentsComponent } from './components/parent/list-parents/list-parents.component';
import { ParentDetailsComponent } from './components/parent/parent-details/parent-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListChildComponent } from './components/child/list-child/list-child.component';

@NgModule({
  declarations: [
    AppComponent,
    AddParentComponent,
    ListParentsComponent,
    ParentDetailsComponent,
    ListChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
