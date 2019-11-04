import { Component, OnInit } from '@angular/core';
import {About}  from './about.component.ts'
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  user:GitUser[];
  
  constructor(private service:UserViceService) { }

  getSearchedUser(searchTerm) {
    this.service.searchMyUser(searchTerm).then(
      (success) => {
        this.user = this.service.user;
        console.log(this.user);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.getSearchedUser('AudreyCherrie');
    
  }
  }

  

  ngOnInit() {
  }

}
