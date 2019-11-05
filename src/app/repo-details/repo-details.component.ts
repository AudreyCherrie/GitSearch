import { Component, OnInit } from '@angular/core';

import { ProfileService } from '../profile.service.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.css']
})
export class RepoDetailsComponent implements OnInit {
  user:User;
  username:string = "";
  response:any;
  repos= [];
  // users=[];
  viewRepo:boolean=false;


  constructor(private profileService:ProfileService,private http:HttpClient) { 

    
// toggleRepos() {
//   this.viewRepo = !this.viewRepo;
// }
}

 
  getMyProfile(){
    this.http.get('https://api.github.com/users/AudreyCherrie?access_token=24c348583b9a7e57c4fdd6c9c48910e8f4755f1e')
    .subscribe ((response) => {
      this.response = response;
      // this.user = this.profileService.getProfileInfo(this.username);
      // this.repos = this.profileService.getRepo(this.username);
        console.log(this.response);
  })
}
ngOnInit() {
  this.profileService.getMyProfile(this.username);
  // this.user = this.profileService.repos;
}

}
