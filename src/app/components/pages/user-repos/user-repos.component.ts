import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services';
import { Repo, User } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.scss'],
})
export class UserReposComponent implements OnInit {
  username: string | null = null;
  user: User | null = null;
  repoList: Repo[] = [];
  headers: Array<string> = [
    'profile image',
    'username',
    'user type',
    'actions',
  ];
  constructor(
    private router: ActivatedRoute,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this.username = this.router.snapshot.paramMap.get('username')!;
    this.fetchData(this.username);
  }

  fetchData(username: string): void {
    this.userService.getRepos(username).subscribe((repos: any) => {
      repos.map((repo: any) => {
        this.repoList.push({
          id: repo.id,
          name: repo.name,
          fullName: repo.full_name,
          private: repo.private,
          url: repo.url,
        });
      });
    });
  }
}
