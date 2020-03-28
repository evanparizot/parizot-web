import { Component, OnInit, Input } from '@angular/core';
import { Experience } from '../models/about';

@Component({
  selector: 'app-about-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  @Input() experience: Experience[];

  constructor() { }

  ngOnInit() {
  }

}
