import { HomeComponent } from './../../../Test/src/app/components/home/home.component';
import { AppComponent } from './../../../Test/src/app/app.component';
import { Employee2Component } from './components/employee2/employee2.component';
import { Employee1Component } from './components/employee1/employee1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:'emp1',component:Employee1Component},
{path:'emp2',component:Employee2Component},
{path:'',component:HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
