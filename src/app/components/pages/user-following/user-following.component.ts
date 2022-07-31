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
  flollowingList: User[] = [];
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
        this.flollowingList.push({
          id: follower.id,
          userName: follower.login,
          userType: follower.type,
          profileImage: follower.avatar_url,
        });
      });
    });
  }
}
