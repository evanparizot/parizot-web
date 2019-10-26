import { Component, OnInit } from '@angular/core';
import { Project, projects } from './projects.data';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { DomSanitizer } from '@angular/platform-browser';
import { trigger, style, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter', [
        style({
        }),
        animate('1s 500ms ease-in')
      ])
    ])
  ]
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = projects;
  cols: number = 3;
  grid = new Map([
    ["xs", 1],
    ["sm", 2],
    ["md", 3],
    ["lg", 3],
    ["xl", 3]
  ]);

  // xs	'screen and (max-width: 599px)'
  // sm	'screen and (min-width: 600px) and (max-width: 959px)'
  // md	'screen and (min-width: 960px) and (max-width: 1279px)'
  // lg	'screen and (min-width: 1280px) and (max-width: 1919px)'
  // xl	'screen and (min-width: 1920px) and (max-width: 5000px)'

  constructor(
    private mediaObserver: MediaObserver,
    private sanitizer: DomSanitizer) 
  {
    mediaObserver.media$.subscribe((change: MediaChange) => {
      // this.activeMediaQuery = `${change.mqAlias}`;
      this.cols = this.grid.get(change.mqAlias);
    });
  }

  ngOnInit() {
  }

  getBackground(image: string) {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }
}
