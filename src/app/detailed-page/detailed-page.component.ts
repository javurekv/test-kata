import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { switchMap, Observable } from 'rxjs';

import Repo from './repo';
import { RepoService } from './repo.service.';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss']
})
export class DetailedPageComponent implements OnInit {
  repo$!: Observable<Repo>;
  constructor(private repoService: RepoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.repo$ = this.route.params
      .pipe(switchMap(({ id }) => this.repoService.getRepoById(id)))
  }
}
