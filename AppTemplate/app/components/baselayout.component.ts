import { Component } from '@angular/core';
import { TableComponent } from './table.component';
import { ProjectsListComponent } from './projectslist.component';
import { trigger, state, animate, transition, style } from '@angular/core';

@Component({
  selector: 'base-layout',
  template: `
    <div class="top-menu row" >
      <img class="top-menu-logo" src="../sources/a1qa_logo.png">
      <div class="top-menu-button" (click)="toggleSideBar()">Projects</div>
      <div class="top-menu-button">{{selectedProject}}</div>
      <div class="top-menu-button">Suites</div>
      <div class="top-menu-button">Tests</div>
      <div class="top-menu-button">Milestones</div>
      <div class="top-menu-button">Results</div>
    </div>
    <div class="main-section row">
      <div *ngIf="showSideBar" [@toggleState] class="side-bar col-sm-3">
        <projects-list (onSelect)="onSelect($event)"><div class="overlay"></div></projects-list>
      </div>
      <div class="col-sm-{{mainSize}} content-section">
        <div class="row table-holder">
          <dashboard *ngIf="projectSelected==false"><div class="overlay"></div></dashboard>
          <main-table *ngIf="projectSelected"><div class="overlay"></div></main-table>
        </div>
      </div>
    </div>
  `,
  animations: [
    trigger('toggleState', [
      state('void', style({'transform': 'translateX(-100%)'})),
      transition('* => *', animate('1000ms ease-out'))
    ])
  ]
})
export class BaseLayoutComponent{
  showSideBar:boolean;
  mainSize:string;
  projectSelected:boolean;
  selectedProject:string;

  constructor(){
    this.showSideBar = true;
    this.mainSize = "9";
    this.projectSelected=false;
    this.selectedProject="Project is not selected";
  }

  onSelect(project: string){
    this.selectedProject=project;
    this.projectSelected=true;
    console.log(this.projectSelected +", "+this.selectedProject);
  }

  toggleSideBar(){
    if(this.showSideBar == true){
      this.showSideBar = false;
      this.mainSize = "12";
      console.log(this.showSideBar);
      return;
    }
    this.showSideBar = true;
    this.mainSize = "9";
    console.log(this.showSideBar);
  }
}
