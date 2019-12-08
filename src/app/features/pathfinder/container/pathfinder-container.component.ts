import { Component, OnInit, HostListener } from '@angular/core';

// NgRx
import * as fromPathfinder from './../state';
import * as pathfinderActions from './../state/pathfinder.actions';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PathNode } from '../models/node';

@Component({
  selector: 'app-pathfinder-container',
  templateUrl: './pathfinder-container.component.html',
  styleUrls: ['./pathfinder-container.component.scss'],
  //changeDirection: ChangeDirectionStrategy.OnPush
})
export class PathfinderContainerComponent implements OnInit {

  nodes$: Observable<PathNode[][]>;

  screenWidth: number;
  screenHeight: number;

  constructor(
    private store: Store<fromPathfinder.State>
  ) {
    this.getScreenSize();
  }
  
  ngOnInit() {
    this.nodes$ = this.store.pipe(select(fromPathfinder.getNodes));
    this.initializeNodes();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight-100;
    console.log(`Width: ${window.innerWidth}, Height: ${window.innerHeight}`);
  }

  initializeNodes(): void {
    let tempHeight = this.screenHeight/20;
    let tempWidth = this.screenWidth/20;

    var nodes: PathNode[][] = new Array<Array<PathNode>>();
    for(var y=0;y<tempHeight;y++) {
      let nodeRow: PathNode[] = new Array<PathNode>();
      for(var x=0;x<tempWidth;x++) {
        nodeRow.push(new PathNode(x,y));
      }
      nodes.push(nodeRow);
    }
    this.store.dispatch(new pathfinderActions.InitializeNodes(nodes));
  }
}
