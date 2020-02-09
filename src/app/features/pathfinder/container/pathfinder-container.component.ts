import {
  actionPathfinderSetStartNode, actionPathfinderSetFinishNode, actionPathfinderToggleWall, actionPathfinderInitializeBoard
} from './../state/pathfinder.actions';
import { selectNodes, selectStartNode, selectFinishNode } from './../state/pathfinder.selectors';
import { Component, OnInit, HostListener } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PathNode } from '../models/node';
import { State } from '../pathfinder.state';

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
    let tempHeight = Math.ceil(this.screenHeight / 30);
    let tempWidth = Math.ceil(this.screenWidth / 30);
    this.store.dispatch(actionPathfinderInitializeBoard({ x: tempWidth, y: tempHeight }));
  }

  toggleNodeWall(node: PathNode): void {
    this.store.dispatch(actionPathfinderToggleWall({ node }));
  }

  setStartNode(startNode: PathNode): void {
    this.store.dispatch(actionPathfinderSetStartNode({ startNode }));
  }

  setFinishNode(finishNode: PathNode): void {
    this.store.dispatch(actionPathfinderSetFinishNode({ finishNode }));
  }
}
