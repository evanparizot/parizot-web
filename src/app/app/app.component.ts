import { TitleService } from './../core/title/title.service';
import { routeAnimations } from './../core/animations/route.animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { AppState } from '../core/core.state';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromSettings from '../core/settings';
import { ActivatedRoute } from '@angular/router';

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
    // { link: 'pathfinder3d', label: 'Pathfinder 3D'}
  ]

  @ViewChild('sidenav', {static: true}) sidenav: MatSidenav;

  opened: boolean;
  hamburger: any;

  theme$: Observable<string>;

  constructor(
    private store: Store<AppState>,
    public titleService: TitleService
    ) {
  }

  ngOnInit(): void {
    this.hamburger = document.querySelector('.hamburger').classList;
    this.sidenav.openedStart.subscribe(() => {this.hamburger.add('is-active')});
    this.sidenav.closedStart.subscribe(() => {this.hamburger.remove('is-active')});
    this.theme$ = this.store.pipe(select(fromSettings.selectTheme));
  }
}
