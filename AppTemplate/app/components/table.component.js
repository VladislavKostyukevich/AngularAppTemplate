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
var TableComponent = (function () {
    function TableComponent(postService) {
        var _this = this;
        this.postService = postService;
        this.postService.postPosts(this.selectedProject).subscribe(function (postsJson) { return console.log(postsJson); });
        this.postService.postPosts(this.selectedProject).subscribe(function (postsJson) {
            _this.users = postsJson;
            _this.headers = ["id", "title", "body"];
        });
    }
    return TableComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TableComponent.prototype, "selectedProject", void 0);
TableComponent = __decorate([
    core_1.Component({
        selector: 'main-table',
        template: "\n    <table class=\"table table-hover\">\n      <thead>\n        <tr>\n          <th *ngFor=\"let header of headers\">{{header}}</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let user of users\">\n          <td>{{user.ID}}</td>\n          <td>{{user.Title}}</td>\n          <td>{{user.Description}}</td>\n        </tr>\n      </tbody>\n    </table>\n  ",
        providers: [posts_service_1.PostService]
    }),
    __metadata("design:paramtypes", [posts_service_1.PostService])
], TableComponent);
exports.TableComponent = TableComponent;
//# sourceMappingURL=table.component.js.map