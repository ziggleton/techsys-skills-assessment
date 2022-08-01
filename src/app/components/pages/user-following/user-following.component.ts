import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import UsersService, { User } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-user-following',
  templateUrl: './user-following.component.html',
  styleUrls: ['./user-following.component.scss'],
})
export class UserFollowingComponent implements OnInit {
  private username: string | null = null;
  user: User | null = null;
  followingList: User[] = [];
  kind: String | null = 'Aux-User';
  headers: Array<string> = ['profile image', 'id', 'username', 'user type'];
  constructor(
    private router: ActivatedRoute,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this.username = this.router.snapshot.paramMap.get('username')!;
    this.fetchData(this.username);
  }

  fetchData(username: string): void {
    this.userService.getFollowing(username).subscribe((following: any) => {
      following.map((follower: any) => {
        this.followingList.push({
          id: follower.node_id,
          userName: follower.login,
          userType: follower.type,
          profileImage: follower.avatar_url,
        });
      });
    });
  }

  ngOnDestroy(): void {
    this.username = null;
    this.user = null;
    this.followingList = [];
    this.kind = null;
    this.headers = [];
  }
}
