import { UserRepository } from '../../../models/github/userRepository';
import { Component, OnInit, Input } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-github-repo-display',
  templateUrl: './github-repo-display.component.html',
  styleUrls: ['./github-repo-display.component.scss']
})
export class GithubRepoDisplayComponent implements OnInit {

  @Input() userRepos: UserRepository[];

  // watcher: Subscription;
  // activeMediaQuery = '';
  cols: number = 4;

  grid = new Map([
    ["xs", 1],
    ["sm", 2],
    ["md", 3],
    ["lg", 4],
    ["xl", 6]
  ]);

  // xs	'screen and (max-width: 599px)'
  // sm	'screen and (min-width: 600px) and (max-width: 959px)'
  // md	'screen and (min-width: 960px) and (max-width: 1279px)'
  // lg	'screen and (min-width: 1280px) and (max-width: 1919px)'
  // xl	'screen and (min-width: 1920px) and (max-width: 5000px)'
  
  // TODO: add animations

  constructor(private mediaObserver: MediaObserver) {
    mediaObserver.media$.subscribe((change: MediaChange) => {
      // this.activeMediaQuery = `${change.mqAlias}`;
      this.cols = this.grid.get(change.mqAlias);
    });
  }

  ngOnInit() {
  }

}
