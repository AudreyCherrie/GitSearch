import { Injectable } from '@angular/core';
import {GitService } from '../git-service/git.service'
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GitService {
_URL = https://api.github.com/users/AudreyCherrie/'
token = ?access_token=24c348583b9a7e57c4fdd6c9c48910e8f4755f1e'
  constructor(public http:HttpClient) { }
}
getRepo(searchTerm: string);observable <any>{
  return this.HTMLButtonElement.length(this._URL + searchTerm + '/repos?' + this.token);
}