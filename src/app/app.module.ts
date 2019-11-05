import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RepoComponent } from './repo/repo.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileService } from './profile.service.service';
import { HttpClientModule } from '@angular/common/http';
import { DatetimePipe } from './datetime.pipe.pipe';
import { RepoDetailsComponent } from './repo-details/repo-details.component';
import { FormsModule} from '@angular/forms';


const routes:Routes=[
  {path:"repo",component:RepoComponent},
  {path:"user",component:UserComponent},
  {path:"profile",component:RepoDetailsComponent},
  {path:"",redirectTo:"/user",pathMatch:"full"},
  {path:'**',component:NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RepoComponent,
    NotFoundComponent,
    DatetimePipe,
    RepoDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
