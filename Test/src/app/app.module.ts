import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Employee1Component } from './components/employee1/employee1.component';
import { Employee2Component } from './components/employee2/employee2.component';
import { SearchPipe } from './pipes/search.pipe';
import { NgColorDirective } from './directives/ng-color.directive';
import { NgKolorDirective } from './directives/ng-kolor.directive';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    Employee1Component,
    Employee2Component,
    SearchPipe,
    NgColorDirective,
    NgKolorDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
