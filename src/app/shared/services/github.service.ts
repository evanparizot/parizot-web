import { UserRepository } from '../models/userRepository';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable, of } from 'rxjs';
import { catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  http: HttpClient;
  githubApiUrl: string = "https://api.github.com"
  constructor(http: HttpClient) {
    this.http = http;
  }

  getUserRepos(username: string): Observable<UserRepository[]> {
    return this.http.get<UserRepository[]>(this.githubApiUrl + `/users/${username}/repos`)
      .pipe(
        catchError(this.handleError<UserRepository[]>('getRepos', []))
      );
  }

  handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }
}
