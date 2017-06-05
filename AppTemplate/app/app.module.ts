import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { Dashboard } from './components/dashboard.component'
import { BaseLayoutComponent } from './components/baselayout.component'
import { TableComponent } from './components/table.component';
import { ProjectsListComponent } from './components/projectslist.component';

@NgModule({
  imports: [ BrowserModule, HttpModule, BrowserAnimationsModule ],
  declarations: [ BaseLayoutComponent, TableComponent, ProjectsListComponent, Dashboard ],
  bootstrap: [ BaseLayoutComponent ]
})
export class AppModule{}
