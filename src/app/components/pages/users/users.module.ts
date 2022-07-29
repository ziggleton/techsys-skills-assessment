import { UserListComponent } from './../../user-list/user-list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { allIcons, HeroIconModule } from 'ng-heroicon';
import { FormsModule } from '@angular/forms';

import { UsersComponent } from './users.component';

@NgModule({
  declarations: [UsersComponent, UserListComponent],
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
