import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import {NgProgressModule } from '@angx-progressbar/core'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { GitNavbarComponent } from './git-navbar/git-navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserRepoComponent } from './user-repo/user-repo.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    GitNavbarComponent,
    NgProgressHttpClientModule,
    NgProgressModule,
    NotFoundComponent,
    UserRepoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
