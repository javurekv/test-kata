import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import Repo from './repo';

import * as repoData from '../mock/repo.json';
import * as repoData1 from '../mock/repo-1.json';
import * as repoData2 from '../mock/repo-2.json';
import * as repoData3 from '../mock/repo-3.json';

@Injectable({
  providedIn: 'root'
})

export class RepoService {
  data = [repoData, repoData1, repoData2, repoData3];

  constructor() { }

  getRepoById(id: number): Observable<Repo> {
    return of(this.data[id]);
  }
}
