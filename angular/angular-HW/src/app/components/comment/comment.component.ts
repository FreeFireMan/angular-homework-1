import {Component, Input, OnInit, Output} from '@angular/core';
import {Comment} from '../../models/comment';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input()
  comment: Comment;
  @Output()
  bubbleUp = new EventEmitter<Comment>();

  constructor() { }

  ngOnInit(): void {
  }
  getCommentInfo(comment: Comment): void {
    this.bubbleUp.emit(comment);
  }

}
