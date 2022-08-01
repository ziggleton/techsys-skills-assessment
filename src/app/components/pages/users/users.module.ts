import { UserReposComponent } from './../user-repos/user-repos.component';
import { UserListComponent } from '../../shared/user-list/user-list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { allIcons, HeroIconModule } from 'ng-heroicon';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { AvatarComponent } from '../../shared/avatar/avatar.component';
import { GridComponent } from '../../shared/grid/grid.component';
import { PreviewComponent } from '../../shared/preview/preview.component';
import { TitleComponent } from '../../shared/title/title.component';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { CommonModule } from '@angular/common';
import { UserGistsComponent } from '../user-gists/user-gists.component';
import { UserFollowingComponent } from '../user-following/user-following.component';
import { UserFollowersComponent } from '../user-followers/user-followers.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserListComponent,
    AvatarComponent,
    GridComponent,
    PreviewComponent,
    TitleComponent,
    UserDetailsComponent,
    UserReposComponent,
    UserGistsComponent,
    UserFollowersComponent,
    UserFollowingComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    CommonModule,
    HeroIconModule.withIcons(
      {
        ...allIcons,
      },
      {
        defaultHostDisplay: 'block',
        attachDefaultDimensionsIfNoneFound: true,
      }
    ),
    RouterModule,
  ],
  providers: [],
  bootstrap: [UsersComponent],
})
export class UsersModule {}
