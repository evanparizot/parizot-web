import { routeAnimations } from './../core/animations/route.animations';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { filter, map } from 'rxjs/operators';
import { AppState } from '../core/core.state';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromSettings from '../core/settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent implements OnInit {

  siteNav = [
    { link: '', label: 'Home' },
    { link: 'about', label: 'About' },
    { link: 'projects', label: 'Projects' }
  ];
  
  projectNav = [
    { link: 'pathfinder', label: 'Pathfinder' },
    { link: 'pathfinder3d', label: 'Pathfinder 3D'}
  ]

  @ViewChild('sidenav', {static: true}) sidenav: MatSidenav;

  opened: boolean;
  hamburger: any;

  theme$: Observable<string>;

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private activeatedRoute: ActivatedRoute, 
    private titleService: Title) {
  }

  ngOnInit(): void {
    this.hamburger = document.querySelector('.hamburger').classList;
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let child = this.activeatedRoute.firstChild;
        let title = "Evan Parizot"
        while (child) {
          if(child.firstChild) {
            child = child.firstChild;
          } else if (child.snapshot.data && child.snapshot.data['title']) {
            return `${child.snapshot.data['title']} | ${title}`;
          } else {
            return title;
          }
        }
        return title;
      })
    ).subscribe((title: string) => {
      this.titleService.setTitle(title);
    });
    this.sidenav.openedStart.subscribe(() => {this.hamburger.add('is-active')});
    this.sidenav.closedStart.subscribe(() => {this.hamburger.remove('is-active')});

    this.theme$ = this.store.pipe(select(fromSettings.selectTheme));
  }
}
