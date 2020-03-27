import { Component, OnInit } from '@angular/core';
import { Profile } from '../models/about';
import { profile } from '../models/about.data';

@Component({
  selector: 'app-about-container',
  templateUrl: './about-container.component.html',
  styleUrls: ['./about-container.component.scss']
})
export class AboutContainerComponent implements OnInit {

  profile: Profile = profile;

  constructor() { }

  ngOnInit() {
  }

}
