import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import UsersService, { User } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-user-followers',
  templateUrl: './user-followers.component.html',
  styleUrls: ['./user-followers.component.scss'],
})
export class UserFollowersComponent implements OnInit {
  private username: string | null = null;
  user: User | null = null;
  followersList: User[] = [];
  kind: string = 'Aux-User';
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
    this.userService.getFollowers(username!).subscribe((followers: any) => {
      followers.map((follower: any) => {
        this.followersList.push({
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
    this.followersList = [];
    this.kind = '';
    this.headers = [];
  }
}
