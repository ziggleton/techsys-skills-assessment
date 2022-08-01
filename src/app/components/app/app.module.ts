import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { allIcons, HeroIconModule } from 'ng-heroicon';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { UsersModule } from '../pages/users/users.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../header/header.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UsersModule,
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
  bootstrap: [AppComponent],
})
export class AppModule {}
