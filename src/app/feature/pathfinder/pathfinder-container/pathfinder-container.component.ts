import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pathfinder-container',
  templateUrl: './pathfinder-container.component.html',
  styleUrls: ['./pathfinder-container.component.scss']
})
export class PathfinderContainerComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Pathfinder Visualizer');
  }

  ngOnInit() {
  }

}
