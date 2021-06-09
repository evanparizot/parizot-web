import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { Project } from "../model/project";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ProjectsService {
  url: string;
  http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
    this.url = environment.backendUrl;
  }

  getProject(id: string): Observable<Project> {
    return this.http.get<Project>(this.url + "/projects/" + id).pipe(
      catchError((err) => {
        throw err;
      })
    );
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.url + "/projects").pipe(
      catchError((err) => {
        throw err;
      })
    );
  }

  // handleError<T>(operation = "operation", result?: T) {
  //   return (error: any): Observable<T> => {
  //     console.error(error);
  //     console.log(`${operation} failed: ${error.message}`);
  //     return of(result as T);
  //   };
  // }
}
