import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  siteNav = [
    { link: '', label: 'Home' },
    { link: 'about', label: 'About' },
    { link: 'projects', label: 'Projects' }
  ];
  
  projectNav = [
    { link: 'pathfinder', label: 'Pathfinder' },
    { link: 'pathfinder3d', label: 'Pathfinder 3D'}
  ]

  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;

  opened: boolean;
  hamburger: any;

  constructor() { }

  ngOnInit(): void {
    this.hamburger = document.querySelector('.hamburger').classList;
  }

  toggleBurger(){
    this.hamburger.toggle("is-active");
  }

}
