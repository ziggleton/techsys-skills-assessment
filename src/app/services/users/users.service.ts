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
@Injectable({
  providedIn: 'root',
})
export default class UsersService {
  private ghUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>(this.ghUrl);
  }
  getUser(username: string) {
    return this.http.get<User[]>(`${this.ghUrl}/${username}`);
  }
  // searchUsers: Observable<User[]> = (username: string) => {
  //   console.log(username);
  //   return <User[]>[];
  // };
  // getRepos: Observable<User[]> = (username: string) => {
  //   return <User[]>[];
  // };
  // getGists: Observable<User[]> = (username: string) => {
  //   return <User[]>[];
  // };
  // getFollowers: Observable<User[]> = (username: string) => {
  //   return <User[]>[];
  // };
  // getFollowing: Observable<User[]> = (username: string) => {
  //   return <User[]>[];
  // };
}
