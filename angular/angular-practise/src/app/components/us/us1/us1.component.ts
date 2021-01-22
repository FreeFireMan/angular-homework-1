import {Component, Input, OnInit, Output} from '@angular/core';
import {User} from '../../../../models/user';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-us1',
  templateUrl: './us1.component.html',
  styleUrls: ['./us1.component.css']
})
export class Us1Component implements OnInit {
  @Input()
  user: User;

  @Output()
  bubbleUp = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  getUserPosts(id: number): void{
    this.bubbleUp.emit(id);
    console.log(id);
  }



}
