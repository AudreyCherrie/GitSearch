import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
// import { UserComponent } from '../user/user.component';
// import { RepoComponent } from '../repo/repo.component';
//import { NotFoundComponent } from '../not-found/not-found.component';
import { BrowserModule } from '@angular/platform-browser';

import { ProfileService } from './profile.service.service';
import { AppComponent } from './app.component';


//const routes:Routes=[
  // {path:"repo",component:RepComponent},
  // {path:"user",component:UserComponent},
  // {path:"",redirectTo:"/",pathMatch:"full"},
  // {path:'**',component:NotFoundComponent}
//]


@NgModule({
  declarations: [
    // UserComponent,
    // RepositoryComponent,
   // NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    //RouterModule.forRoot(routes)
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class RoutingModule { }

