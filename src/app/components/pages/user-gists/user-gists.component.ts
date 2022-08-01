import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import UsersService, {
  Gist,
  Repo,
  User,
} from 'src/app/services/users/users.service';

@Component({
  selector: 'app-user-gists',
  templateUrl: './user-gists.component.html',
  styleUrls: ['./user-gists.component.scss'],
})
export class UserGistsComponent implements OnInit {
  private username: string | null = null;
  user: User | null = null;
  gistList: Gist[] = [];
  headers: Array<string> = ['name', 'pull url', 'push url', 'public', 'link'];
  Kind: String | null = 'Gist';
  constructor(
    private router: ActivatedRoute,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this.username = this.router.snapshot.paramMap.get('username')!;
    this.fetchData(this.username);
  }

  fetchData(username: string): void {
    this.userService.getGists(username!).subscribe((gists: any) => {
      gists.map((gist: any) => {
        this.gistList.push({
          id: gist.id,
          name: gist.node_id,
          pullUrl: gist.git_pull_url,
          pushUrl: gist.git_push_url,
          public: gist.public,
          url: gist.url,
        });
      });
    });
  }

  ngOnDestroy(): void {
    this.username = null;
    this.user = null;
    this.gistList = [];
    this.Kind = null;
    this.headers = [];
  }
}
