import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  @Input() users: User[] = [];
  @Input() headers: Array<string> = [];

  ngOnInit(): void {}
}
