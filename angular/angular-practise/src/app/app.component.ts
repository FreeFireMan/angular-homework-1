import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostService} from './service/postService';
import {Post} from '../models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Post[];

  constructor(private postService: PostService) {
  }

  getId(id: number): void {
    this.postService.getUserPosts(id).subscribe(value => this.posts = value);
  }
}
