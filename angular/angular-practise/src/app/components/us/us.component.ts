import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../../models/user';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.css']
})
export class UsComponent implements OnInit {
  users: User[];
  @Output()
  bubbleUp = new EventEmitter<number>();

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value);
  }

  getBubble(id: number): void {
    this.bubbleUp.emit(id);
  }
}
