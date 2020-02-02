import {
  actionPathfinderSetStartNode, actionPathfinderSetFinishNode, actionPathfinderSetNodes
} from './../state/pathfinder.actions';
import { selectNodes, selectStartNode, selectFinishNode } from './../state/pathfinder.selectors';
import { Component, OnInit, HostListener } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, merge, combineLatest } from 'rxjs';
import { PathNode, PathNodeState } from '../models/node';
import { State } from '../pathfinder.state';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-pathfinder-container',
  templateUrl: './pathfinder-container.component.html',
  styleUrls: ['./pathfinder-container.component.scss'],
  //changeDirection: ChangeDirectionStrategy.OnPush
})
export class PathfinderContainerComponent implements OnInit {

  nodes$: Observable<PathNode[][]>;
  startNode$: Observable<PathNode>;
  finishNode$: Observable<PathNode>;

  screenWidth: number;
  screenHeight: number;

  constructor(
    private store: Store<State>
  ) {
    this.getScreenSize();
  }

  ngOnInit() {
    this.nodes$ = this.store.pipe(select(selectNodes));
    this.startNode$ = this.store.pipe(select(selectStartNode));
    this.finishNode$ = this.store.pipe(select(selectFinishNode));

    this.initializeNodes();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight - 170;
  }

  initializeNodes(): void {
    let tempHeight = this.screenHeight / 30;
    let tempWidth = this.screenWidth / 30;

    var nodes: PathNode[][] = new Array<Array<PathNode>>();
    for (var y = 0; y < tempHeight; y++) {
      let nodeRow: PathNode[] = new Array<PathNode>();
      for (var x = 0; x < tempWidth; x++) {
        nodeRow.push(new PathNode(x, y));
      }
      nodes.push(nodeRow);
    }
    this.store.dispatch(actionPathfinderSetNodes({ nodes }));
  }

  setStartNode(node: PathNode) {
    console.log('Set start node');
    node.state = 4;
    
    this.nodes$.pipe(take(1)).subscribe(nodes => {
      let newNodes = [...nodes];
      newNodes[node.y][node.x] = node;
      this.store.dispatch(actionPathfinderSetNodes({ nodes: newNodes}));
    });

    this.store.dispatch(actionPathfinderSetStartNode({startNode: node}));
  }

  setFinishNode(node: PathNode) {
    console.log('Set finish node');
    node.state = 5;
    // need to subscribe to finishNode$ and get coordinates in order to update it
    // 
    this.nodes$.pipe(take(1)).subscribe(nodes => {
      let newNodes = [...nodes];
      newNodes[node.y][node.x] = node;
      this.store.dispatch(actionPathfinderSetNodes({ nodes: newNodes }));
    });
    this.store.dispatch(actionPathfinderSetFinishNode({finishNode: node}));
  }
}
