import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToggleService, UsersService } from 'src/app/services';
import { User } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  sub: Subscription;
  userSub: Subscription;
  canShowPreview: boolean = false;
  selectedItem: User | null = null;
  users: User[] = [];
  headers: Array<string> = [
    'profile image',
    'username',
    'user type',
    'actions',
  ];

  constructor(
    private userService: UsersService,
    private uiService: ToggleService
  ) {
    this.sub = this.uiService
      .onShowPreview()
      .subscribe(
        (val: boolean) => ((this.canShowPreview = val), this.fetchData())
      );
    this.userSub = this.uiService
      .onSelectItem()
      .subscribe((val: User) => ((this.selectedItem = val), this.fetchData()));
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.userService.getUsers().subscribe((users: any) => {
      users.map((user: any) => {
        this.users.push({
          id: user.id,
          userName: user.login,
          userType: user.type,
          profileImage: user.avatar_url,
        });
      });
    });
  }

  ngOnDestroy(): void {
    this.users = [];
    this.headers = [];
    this.sub.unsubscribe();
  }
}
