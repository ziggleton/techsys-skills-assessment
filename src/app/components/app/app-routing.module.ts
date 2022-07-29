import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserDetailsComponent } from '../pages/user-details/user-details.component';
import { UserNotFoundComponent } from '../pages/user-not-found/user-not-found.component';
import { UsersComponent } from '../pages/users/users.component';

const appRoutes: Routes = [
  {
    path: 'users',
    children: [
      { path: '', component: UsersComponent },
      { path: 'details/:username', component: UserDetailsComponent },
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
