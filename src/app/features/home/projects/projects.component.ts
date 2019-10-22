import { Component, OnInit } from '@angular/core';
import { Project, projects } from './projects.data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = projects;

  constructor() { }

  ngOnInit() {
  }

}
