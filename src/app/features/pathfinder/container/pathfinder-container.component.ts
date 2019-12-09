import { selectNodes } from './../state/pathfinder.selectors';
import { Component, OnInit, HostListener } from '@angular/core';

// NgRx
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PathNode } from '../models/node';
import { State } from '../pathfinder.state';
import { actionPathfinderInitializeNodes } from '../state/pathfinder.actions';

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
    private store: Store<State>
  ) {
    this.getScreenSize();
  }
  
  ngOnInit() {
    this.nodes$ = this.store.pipe(select(selectNodes));
    this.initializeNodes();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight-100;
    console.log(`Width: ${window.innerWidth}, Height: ${window.innerHeight}`);
  }

  initializeNodes(): void {
    let tempHeight = this.screenHeight/30;
    let tempWidth = this.screenWidth/30;

    var nodes: PathNode[][] = new Array<Array<PathNode>>();
    for(var y=0;y<tempHeight;y++) {
      let nodeRow: PathNode[] = new Array<PathNode>();
      for(var x=0;x<tempWidth;x++) {
        nodeRow.push(new PathNode(x,y));
      }
      nodes.push(nodeRow);
    }
    this.store.dispatch(actionPathfinderInitializeNodes({nodes}));
  }
}
