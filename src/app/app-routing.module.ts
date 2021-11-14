import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { StepComponent } from './step/step.component';
import { ToolComponent } from './tool/tool.component';
import { TryComponent } from './try/try.component';
import { ProblemComponent } from './problem/problem.component';
import { CreateComponent } from './create/create.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'course', component: CourseComponent},
  {path: 'step', component: StepComponent},
  {path: 'tool', component: ToolComponent},
  {path: 'try', component: TryComponent},
  {path: 'problem', component: ProblemComponent},
  {path: 'create', component: CreateComponent},
  {path: '**', pathMatch: 'full', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
