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
var posts_service_1 = require("../services/posts.service");
var ProjectsListComponent = (function () {
    function ProjectsListComponent(postService) {
        var _this = this;
        this.postService = postService;
        this.onSelect = new core_1.EventEmitter();
        this.postService.getPosts().subscribe(function (postsJson) {
            _this.posts = postsJson;
        });
    }
    ProjectsListComponent.prototype.select = function (project) {
        console.log(project);
        this.onSelect.emit(project);
    };
    return ProjectsListComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ProjectsListComponent.prototype, "onSelect", void 0);
ProjectsListComponent = __decorate([
    core_1.Component({
        selector: 'projects-list',
        template: "\n  <div class=\"pre-scrollable\">\n    <div #div (click)=\"select(div.innerText)\" class=\"project-list-button\" *ngFor=\"let project of posts\">\n        {{project.Title}}\n    </div>\n  </div>\n  ",
        providers: [posts_service_1.PostService]
    }),
    __metadata("design:paramtypes", [posts_service_1.PostService])
], ProjectsListComponent);
exports.ProjectsListComponent = ProjectsListComponent;
//# sourceMappingURL=projectslist.component.js.map