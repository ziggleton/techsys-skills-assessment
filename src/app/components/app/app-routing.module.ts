import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserDetailsComponent } from '../pages/user-details/user-details.component';
import { UserFollowersComponent } from '../pages/user-followers/user-followers.component';
import { UserFollowingComponent } from '../pages/user-following/user-following.component';
import { UserGistsComponent } from '../pages/user-gists/user-gists.component';
import { UserNotFoundComponent } from '../pages/user-not-found/user-not-found.component';
import { UserReposComponent } from '../pages/user-repos/user-repos.component';
import { UsersComponent } from '../pages/users/users.component';

const appRoutes: Routes = [
  {
    path: 'users',
    children: [
      { path: '', component: UsersComponent },
      { path: 'details/:username', component: UserDetailsComponent },
      { path: 'repos/:username', component: UserReposComponent },
      { path: 'gists/:username', component: UserGistsComponent },
      { path: 'followers/:username', component: UserFollowersComponent },
      { path: 'following/:username', component: UserFollowingComponent },
    ],
  },
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full',
  },
  { path: '**', component: UserNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
