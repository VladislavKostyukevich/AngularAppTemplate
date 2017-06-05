import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PostService } from '../services/posts.service';
import { BaseLayoutComponent } from './baselayout.component'

@Component({
  selector: 'projects-list',
  template: `
  <div class="pre-scrollable">
    <div #div (click)="select(div.innerText)" class="project-list-button" *ngFor="let project of posts">
        {{project.Title}}
    </div>
  </div>
  `,
  providers: [PostService]
})
export class ProjectsListComponent{
  posts: Post[];
  @Output() onSelect = new EventEmitter<string>();

  constructor(private postService: PostService){
      this.postService.getPosts().subscribe(postsJson =>{
      this.posts = postsJson;
    });
  }

  select(project: string) {
    console.log(project);
    this.onSelect.emit(project);
  }
}

interface Post{
  ID: number;
  Title: string;
  Description: string;
  PageCount:number;
  Excerpt:string;
  PublishDate: string;
}
