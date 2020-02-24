import { Component, OnInit } from '@angular/core';
import { Profile } from '../models/about';
import { profile } from '../models/about.data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  profile: Profile = profile;

  constructor() { }

  ngOnInit() {
  }

}
