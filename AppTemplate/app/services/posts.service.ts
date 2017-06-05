import { Injectable } from '@angular/core';
import { Http, Headers , RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService{
  constructor(private http: Http){
    console.log('PostService Initialize ...')
  }

  getPosts(){
    return this.http.get('http://fakerestapi.azurewebsites.net/api/Books')
    .map(res => res.json())
  }

  postPosts(projectName: string){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(
      'https://jsonplaceholder.typicode.com/posts',
    `data: {
      title: `+ projectName +`
    }`, options)
    .map(res => res.json())
  }
}
