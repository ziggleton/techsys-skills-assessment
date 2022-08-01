import { user } from 'ng-heroicon';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface User {
  id: number;
  userName: string;
  userType: string;
  profileImage: string;
  fullName?: string;
  bio?: string;
  followers?: number;
  following?: number;
  repos?: number;
  gists?: number;
}

export type ExtendedUserDetails = User & {
  repoList?: Repo[];
  gistList?: Gist[];
  followersList?: User[];
  followingList?: User[];
};

export interface Repo {
  id: string | number;
  name: string;
  fullName: string;
  private: boolean;
  url: string;
}
export interface Gist {
  id: string | number;
  name: string;
  pullUrl: string;
  pushUrl: string;
  public: boolean;
  url: string;
}
@Injectable({
  providedIn: 'root',
})
export default class UsersService {
  private ghUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.ghUrl);
  }
  getUser(username: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.ghUrl}/${username}`);
  }
  searchUser(query: string, page: number = 1): Observable<User[]> {
    return this.http.get<User[]>(
      `${this.ghUrl}/search/users?q=${query}&page=${page}&per_page=10`
    );
  }
  getRepos(username: string): Observable<Repo[]> {
    return this.http.get<Repo[]>(`${this.ghUrl}/${username}/repos`);
  }
  getGists(username: string): Observable<Gist[]> {
    return this.http.get<Gist[]>(`${this.ghUrl}/${username}/gists`);
  }
  getFollowers(username: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.ghUrl}/${username}/followers`);
  }
  getFollowing(username: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.ghUrl}/${username}/following`);
  }
}
