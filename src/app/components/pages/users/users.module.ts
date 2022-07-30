import { UserListComponent } from '../../shared/user-list/user-list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { allIcons, HeroIconModule } from 'ng-heroicon';
import { FormsModule } from '@angular/forms';

import { UsersComponent } from './users.component';
import { AvatarComponent } from '../../shared/avatar/avatar.component';
import { GridComponent } from '../../shared/grid/grid.component';
import { PreviewComponent } from '../../shared/preview/preview.component';

@NgModule({
  declarations: [
    UsersComponent,
    UserListComponent,
    AvatarComponent,
    GridComponent,
    PreviewComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HeroIconModule.withIcons(
      {
        ...allIcons,
      },
      {
        defaultHostDisplay: 'block',
        attachDefaultDimensionsIfNoneFound: true,
      }
    ),
  ],
  providers: [],
  bootstrap: [UsersComponent],
})
export class UsersModule {}
