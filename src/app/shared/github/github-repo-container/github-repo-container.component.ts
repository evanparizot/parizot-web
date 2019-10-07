import { UserRepository } from '../models/userRepository';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { GithubService } from '../services/github.service';

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
