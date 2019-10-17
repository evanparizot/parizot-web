import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }
}
