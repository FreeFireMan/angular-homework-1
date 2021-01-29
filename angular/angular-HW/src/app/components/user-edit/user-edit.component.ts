import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm} from '@angular/forms';
import {User} from '../../interfaces/user';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: User;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      this.user = this.router.getCurrentNavigation().extras.state as User;
    });
  }

  name = new FormControl(this.user.name);
  age = new FormControl(this.user.age);
  email = new FormControl(this.user.email);
  form = new FormGroup({
    name: this.name,
    age: this.age,
    email: this.email
  });

  ngOnInit(): void {
    console.log(this.user);
  }

  // submitChanges(form: NgForm): void {
  //   console.log(form);
  // }

  submitChanges(form: FormGroup): void {
    console.log(form);
  }
}
