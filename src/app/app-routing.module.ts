import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { StepComponent } from './step/step.component';
import { ToolComponent } from './tool/tool.component';
import { TryComponent } from './try/try.component';
import { ProblemComponent } from './problem/problem.component';
import { CreateComponent } from './create/create.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';

const routes: Routes = [
  {path: '',component: AboutComponent},
  {path: 'about',component: AboutComponent},
  {path: 'home',component: HomeComponent},
  {path: 'course', component: CourseComponent},
  {path: 'step', component: StepComponent},
  {path: 'tool', component: ToolComponent},
  {path: 'try', component: TryComponent},
  {path: 'problem', component: ProblemComponent},
  {path: 'create', component: CreateComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '**', pathMatch: 'full', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class AppRoutingModule {}
