import { Subscription } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { ToggleService } from 'src/app/services';
import UsersService, { User } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent implements OnInit {
  userSub: Subscription;
  user: User | null = null;
  @Input() selectedItem: User | any = null;
  constructor(
    private uiService: ToggleService,
    private userService: UsersService
  ) {
    this.userSub = this.uiService
      .onSelectItem()
      .subscribe((val: User) => ((this.selectedItem = val), this.fetchData()));
  }

  ngOnInit(): void {
    this.fetchData();
  }

  closePreview(): void {
    this.uiService.closePreview();
  }

  fetchData(): void {
    if (!this.selectedItem || typeof this.selectedItem == 'boolean') return;
    this.userService
      .getUser(this.selectedItem.userName!)
      .subscribe((user: any) => {
        this.user = {
          id: user.id,
          userName: user.login,
          userType: user.type,
          profileImage: user.avatar_url,
          fullName: user.name,
          bio: user.bio,
          followers: user.followers,
          following: user.following,
          repos: user.public_repos,
          gists: user.public_gists,
        };
      });
  }

  ngOnDestroy(): void {
    this.user = null;
    this.userSub.unsubscribe();
  }
}
