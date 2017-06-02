import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProjectsListComponent } from './components/projectslist.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, ProjectsListComponent ],
  bootstrap: [ AppComponent, ProjectsListComponent ]
})
export class AppModule{}
