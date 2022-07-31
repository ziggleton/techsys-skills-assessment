import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services';
import {
  ExtendedUserDetails,
  Gist,
  Repo,
  User,
} from 'src/app/services/users/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  private username: string | null = null;
  user: ExtendedUserDetails | null = null;
  private repoList: Repo[] = [];
  private gistList: Gist[] = [];
  private followersList: User[] = [];
  private followingList: User[] = [];
  constructor(
    private router: ActivatedRoute,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this.username = this.router.snapshot.paramMap.get('username')!;
    this.fetchData(this.username);
  }

  fetchData(username: string): void {
    this.userService.getUser(this.username!).subscribe((user: any) => {
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
      this.userService.getGists(this.username!).subscribe((gists: any) => {
        gists.map((gist: any) => {
          this.gistList.push({
            id: gist.id,
            name: gist.name,
            pullUrl: gist.git_pull_url,
            pushUrl: gist.git_push_url,
            url: gist.url,
          });
        });
        if (this.user) {
          this.user.gistList = this.gistList!;
        }
      });
      this.userService.getRepos(this.username!).subscribe((repos: any) => {
        repos.map((repo: any) => {
          this.repoList.push({
            id: repo.id,
            name: repo.name,
            fullName: repo.full_name,
            private: repo.private,
            url: repo.url,
          });
        });
        if (this.user) {
          this.user.repoList = this.repoList!;
        }
      });
      this.userService
        .getFollowers(this.username!)
        .subscribe((followers: any) => {
          followers.map((follower: any) => {
            this.followersList.push({
              id: follower.id,
              userName: follower.login,
              userType: follower.type,
              profileImage: follower.avatar_url,
              fullName: follower.name,
              bio: follower.bio,
              followers: follower.followers,
              following: follower.following,
              repos: follower.public_repos,
              gists: follower.public_gists,
            });
          });
          if (this.user) {
            this.user.followersList = this.followersList!;
          }
        });

      this.userService
        .getFollowing(this.username!)
        .subscribe((followings: any) => {
          followings.map((following: any) => {
            this.followingList.push({
              id: following.id,
              userName: following.login,
              userType: following.type,
              profileImage: following.avatar_url,
              fullName: following.name,
              bio: following.bio,
              followers: following.followers,
              following: following.following,
              repos: following.public_repos,
              gists: following.public_gists,
            });
          });
          if (this.user) {
            this.user.followingList = this.followingList!;
          }
        });
    });
  }

  ngOnDestroy(): void {
    this.username = null;
    this.user = null;
    this.repoList = [];
    this.gistList = [];
    this.followersList = [];
    this.followingList = [];
  }
}
