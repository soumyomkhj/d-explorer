import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { StepComponent } from './step/step.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ToolComponent } from './tool/tool.component';
import { TryComponent } from './try/try.component';
import { CreateComponent } from './create/create.component';
import { ProblemComponent } from './problem/problem.component';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUxswC-Zcl2a8jaJJWDMFRqpnSDEerjZA",
  authDomain: "river-handbook-312015.firebaseapp.com",
  projectId: "river-handbook-312015",
  storageBucket: "river-handbook-312015.appspot.com",
  messagingSenderId: "909213372942",
  appId: "1:909213372942:web:c95a680604d06291a1625f",
  measurementId: "G-HLHPXF1SQP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


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
    HttpClientModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
