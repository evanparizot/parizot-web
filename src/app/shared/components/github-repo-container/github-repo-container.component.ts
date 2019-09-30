import { UserRepository } from '../../../models/github/userRepository';
import { GithubService } from './../../../services/github.service';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-github-repo-container',
  templateUrl: './github-repo-container.component.html',
  styleUrls: ['./github-repo-container.component.scss']
})
export class GithubRepoContainerComponent implements OnInit {

  userRepos$: Observable<UserRepository[]>;

  constructor(private githubService: GithubService) {
  }

  ngOnInit() {
    this.userRepos$ = this.githubService.getUserRepos("evanparizot").pipe(
      map(res => res),
      catchError(error => {
        this.githubService.handleError(error);
        return of(null);
      })
    );
  }

}
