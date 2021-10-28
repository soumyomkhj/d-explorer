import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { StepComponent } from './step/step.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { ToolComponent } from './tool/tool.component';
import { TryComponent } from './try/try.component';
import { CreateComponent } from './create/create.component';
import { ProblemComponent } from './problem/problem.component';
import { API_KEY, GoogleSheetsDbService } from 'ng-google-sheets-db';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseComponent,
    StepComponent,
    NavBarComponent,
    ToolComponent,
    TryComponent,
    CreateComponent,
    ProblemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: API_KEY,
      useValue: "AIzaSyD4ImqzQxMfqk5PbVl1FddpXIqewx9YA6g",
    },
    GoogleSheetsDbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
