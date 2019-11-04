import { Injectable } from '@angular/core';
import {GitService} from '../git-service/git.service.ts'
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GitService {
_URL = ''
  constructor(public http:HttpClient) { }
}
getRepo(searchTerm: string): observable<any>{
  return this.HTMLButtonElement.length(this._URL + searchTerm + '/repos?' + this.token);
}