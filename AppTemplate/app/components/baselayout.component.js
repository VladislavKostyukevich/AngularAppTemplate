"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var BaseLayoutComponent = (function () {
    function BaseLayoutComponent() {
        this.showSideBar = true;
        this.mainSize = "9";
        this.projectSelected = false;
        this.selectedProject = "Project is not selected";
    }
    BaseLayoutComponent.prototype.onSelect = function (project) {
        this.selectedProject = project;
        this.projectSelected = true;
        console.log(this.projectSelected + ", " + this.selectedProject);
    };
    BaseLayoutComponent.prototype.toggleSideBar = function () {
        if (this.showSideBar == true) {
            this.showSideBar = false;
            this.mainSize = "12";
            console.log(this.showSideBar);
            return;
        }
        this.showSideBar = true;
        this.mainSize = "9";
        console.log(this.showSideBar);
    };
    return BaseLayoutComponent;
}());
BaseLayoutComponent = __decorate([
    core_1.Component({
        selector: 'base-layout',
        template: "\n    <div class=\"top-menu row\" >\n      <img class=\"top-menu-logo\" src=\"../sources/a1qa_logo.png\">\n      <div class=\"top-menu-button\" (click)=\"toggleSideBar()\">Projects</div>\n      <div class=\"top-menu-button\">{{selectedProject}}</div>\n      <div class=\"top-menu-button\">Suites</div>\n      <div class=\"top-menu-button\">Tests</div>\n      <div class=\"top-menu-button\">Milestones</div>\n      <div class=\"top-menu-button\">Results</div>\n    </div>\n    <div class=\"main-section row\">\n      <div *ngIf=\"showSideBar\" [@toggleState] class=\"side-bar col-sm-3\">\n        <projects-list (onSelect)=\"onSelect($event)\"><div class=\"overlay\"></div></projects-list>\n      </div>\n      <div class=\"col-sm-{{mainSize}} content-section\">\n        <div class=\"row table-holder\">\n          <dashboard *ngIf=\"projectSelected==false\"><div class=\"overlay\"></div></dashboard>\n          <main-table *ngIf=\"projectSelected\"><div class=\"overlay\"></div></main-table>\n        </div>\n      </div>\n    </div>\n  ",
        animations: [
            core_2.trigger('toggleState', [
                core_2.state('void', core_2.style({ 'transform': 'translateX(-100%)' })),
                core_2.transition('* => *', core_2.animate('1000ms ease-out'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], BaseLayoutComponent);
exports.BaseLayoutComponent = BaseLayoutComponent;
//# sourceMappingURL=baselayout.component.js.map