"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var animations_1 = require("@angular/platform-browser/animations");
var dashboard_component_1 = require("./components/dashboard.component");
var baselayout_component_1 = require("./components/baselayout.component");
var table_component_1 = require("./components/table.component");
var projectslist_component_1 = require("./components/projectslist.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, animations_1.BrowserAnimationsModule],
        declarations: [baselayout_component_1.BaseLayoutComponent, table_component_1.TableComponent, projectslist_component_1.ProjectsListComponent, dashboard_component_1.Dashboard],
        bootstrap: [baselayout_component_1.BaseLayoutComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map