import { Component, Input } from '@angular/core';
import { PostService } from '../services/posts.service';

@Component({
  selector: 'main-table',
  template: `
    <table class="table table-hover">
      <thead>
        <tr>
          <th *ngFor="let header of headers">{{header}}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let user of users">
          <td>{{user.ID}}</td>
          <td>{{user.Title}}</td>
          <td>{{user.Description}}</td>
        </tr>
      </tbody>
    </table>
  `,
  providers: [PostService]
})
export class TableComponent{
  headers: string[];
  users: Post[];
  @Input() selectedProject: string;

  constructor(private postService: PostService){
    this.postService.postPosts(this.selectedProject).subscribe(postsJson => console.log(postsJson));
    this.postService.postPosts(this.selectedProject).subscribe(postsJson =>{
    this.users = postsJson;
    this.headers = ["id", "title", "body"]
})}
}

interface Post{
  ID: number;
  Title: string;
  Description: string;
  PageCount:number;
  Excerpt:string;
  PublishDate: string;
}

interface userTemplate{
  firstname:string,
  lastname:string,
  email:string
}
