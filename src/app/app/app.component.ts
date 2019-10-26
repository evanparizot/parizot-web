import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  navigation = [
    { link: '', label: 'Home' },
    { link: 'pathfinder', label: 'Pathfinder' }
  ];

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
