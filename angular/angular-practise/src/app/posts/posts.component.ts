import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/post';
import {PostService} from '../service/postService';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input()
  posts: Post[];
  userId: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  getBubble(id: number): void {
    this.userId = id;
  }
}


