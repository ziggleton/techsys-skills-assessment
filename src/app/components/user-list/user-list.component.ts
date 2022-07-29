import { Component, OnInit } from '@angular/core';
import { user } from 'ng-heroicon';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((items) => {
      console.log(items);
    });
  }
}
