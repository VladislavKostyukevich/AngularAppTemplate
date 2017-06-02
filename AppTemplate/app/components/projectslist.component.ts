import { Component } from '@angular/core';

@Component({
  selector: 'projects-list',
  template: `
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Dropdown
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
      <button *ngFor="let project of projects" class="dropdown-item" type="button">{{project}}</button>
    </div>
  </div>
  `,
})
export class ProjectsListComponent{
  projects: string[];

  constructor(){
    this.projects = ["TestProject 1","TestProject 2","TestProject 3","TestProject 4","TestProject 5"]
  }
}
