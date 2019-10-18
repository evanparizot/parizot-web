import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

// NgRx
import * as fromPathfinder from './../state';
import * as pathfinderActions from './../state/pathfinder.actions';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pathfinder-container',
  templateUrl: './pathfinder-container.component.html',
  styleUrls: ['./pathfinder-container.component.scss']
})
export class PathfinderContainerComponent implements OnInit {

  nodes$: Observable<number[][]>;

  constructor(
    private titleService: Title, 
    private store: Store<fromPathfinder.State>
  ) {
    
  }
  
  ngOnInit() {
    this.nodes$ = this.store.pipe(select(fromPathfinder.getNodes));
  }
}
