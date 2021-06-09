import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import { Project } from '../model/project';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  project$!: Observable<Project>;
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  constructor(
    private service: ProjectsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.project$ = this.route.paramMap.pipe(
      switchMap(params => {
        return this.service.getProject(params.get('id')).pipe(catchError((err, caught) => {
          switch(err.status) {
            case 404: {
              this.router.navigate(['/projects/404']);
            }
            default: {
              return caught;
            }
          }
        }));
      })
    );
  }
}
