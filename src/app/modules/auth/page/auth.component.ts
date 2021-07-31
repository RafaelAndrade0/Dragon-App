import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/data/types/user';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  submit(user: User) {
    console.log(user);
  }
}
