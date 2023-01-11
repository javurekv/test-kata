import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { ReplaySubject, takeUntil } from 'rxjs';

export const moblieWidth = 992;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
  isMobile!: boolean;

  private isMainPage!: boolean;
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  get isOpened() { return !this.isMobile || this.isMobile && this.isMainPage };

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events
      .pipe(takeUntil(this.destroyed$))
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.isMainPage = event.url === '/';
        }
      });

    this.onResize(window.innerWidth);
  }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    this.isMobile = width <= moblieWidth;
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
