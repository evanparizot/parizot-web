import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

// NgRx
import * as fromPathfinder from './../state';
import * as pathfinderActions from './../state/pathfinder.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-pathfinder-container',
  templateUrl: './pathfinder-container.component.html',
  styleUrls: ['./pathfinder-container.component.scss']
})
export class PathfinderContainerComponent implements OnInit {

  constructor(private titleService: Title, private store: Store<fromPathfinder.State>) {
    
  }
  
  ngOnInit() {
    this.titleService.setTitle('Pathfinder Visualizer');
    
  }

}
