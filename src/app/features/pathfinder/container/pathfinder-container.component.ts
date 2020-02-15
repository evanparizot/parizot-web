import {
  actionPathfinderSetStartNode, actionPathfinderSetFinishNode, actionPathfinderToggleWall, actionPathfinderInitializeBoard
} from './../state/pathfinder.actions';
import { selectNodes, selectStartNode, selectFinishNode, selectPathfinderPauseSearch, selectHeuristic, selectPathfinderSearching, selectPathfinderSettings } from './../state/pathfinder.selectors';
import { Component, OnInit, HostListener } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, merge } from 'rxjs';
import { PathNode } from '../models/node';
import { State } from '../pathfinder.state';
import { withLatestFrom, map, filter } from 'rxjs/operators';
import { selectPathfinderAStar, selectPathfinderAStarOpenSet } from '../state/astar/astar.selectors';
import { actionPathfinderUpdateAStar } from '../state/astar/astar.actions';
import { HeuristicService } from '../services/heuristic.service';
import produce from 'immer';
import * as _ from 'lodash';

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

  pauseSearch$: Observable<boolean>;

  screenWidth: number;
  screenHeight: number;

  constructor(
    private store: Store<State>,
    // private heuristicService: HeuristicService
  ) {
    this.getScreenSize();
  }

  ngOnInit() {
    this.nodes$ = this.store.pipe(select(selectNodes));
    this.startNode$ = this.store.pipe(select(selectStartNode));
    this.finishNode$ = this.store.pipe(select(selectFinishNode));
    this.pauseSearch$ = this.store.pipe(select(selectPathfinderPauseSearch));

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

  listenForSearch(nodes: PathNode[][], start: PathNode, finish: PathNode) {

    let openSet: PathNode[] = [];
    let closedSet: PathNode[] = [];

    openSet.push(start);

    while (openSet.length > 0) {
      // console.log("I ran");
      sleep(400);
      let nodeWithLowestF = produce(openSet.reduce((min, p) => p.f < min.f ? p : min, openSet[0]), copy => { });

      _.remove(openSet, function(n) { return (n.x == nodeWithLowestF.x && n.y == nodeWithLowestF.y)});
      closedSet.push(nodeWithLowestF);

      if (nodeWithLowestF.x == finish.x && nodeWithLowestF.y == finish.y) {
        return;
      }

      let children: PathNode[] = [];

      move.forEach(pos => {
        let [x, y] = [nodeWithLowestF.x + pos[0], nodeWithLowestF.y + pos[1]];
        if (x < 0 || y < 0 || y > nodes.length || x > nodes[0].length) {
          return;
        }
        if (nodes[y][x].traversable == false) {
          return;
        }
        if (closedSet.filter(node => (node.x == x && node.y == y)).length > 0) {
          return;
        }
        let node = new PathNode(x, y);
        node.g = nodeWithLowestF.g + pos[2];
        node.h = this.getHCost(node, finish, "octile");
        node.f = node.g + node.h;
        // node.parent = nodeWithLowestF;
        var lower = false;
        openSet.filter(node => (node.x == x && node.y == y)).forEach(x => {
          if (x.g < node.g) {
            lower = true;
            return;
          }
        });
        if (lower) {
          return;
        }
        openSet.push(node);
      })

      // Add children to unvisited list
      this.store.dispatch(actionPathfinderUpdateAStar({ openSetNodes: children, toClose: nodeWithLowestF }));

      // children.forEach(x => openSet.push(x));
      // openSet.concat(children);
      // return of(actionPathfinderUpdateAStar({ openSetNodes: children, toClose: nodeWithLowestF }));
      // return of(actionPathfinderAStarAddMultipleToOpenSet({nodes: children}))
      // return of(actionPathfinderAStarAddMultipleToOpenSet({ nodes: children }));
    }

    // If open list is zero, means there's no solution. Return error message.

    // return of(actionPathfinderAStarNoop());

  }


  getHCost(source: PathNode, target: PathNode, heuristic: string): number {
    switch (heuristic.toLocaleLowerCase()) {
      case "manhattan":
        return this.getManhattanHeuristic(source, target);
      case "euclidean":
        return this.getEuclideanHeuristic(source, target);
      case "octile":
        return this.getOctileHeuristic(source, target);
      case "chebyshev":
        return this.getChebyshevHeuristic(source, target);
    }
  }

  getManhattanHeuristic(source: PathNode, target: PathNode): number {
    let [dx, dy] = this.getDifference(source, target);
    return dx + dy;
  }

  getEuclideanHeuristic(source: PathNode, target: PathNode): number {
    let [dx, dy] = this.getDifference(source, target);
    return Math.sqrt(dx * dx + dy * dy);
  }

  getOctileHeuristic(source: PathNode, target: PathNode): number {
    let [dx, dy] = this.getDifference(source, target);
    let F = Math.SQRT2 - 1;
    return (dx < dy) ? F * dx + dy : F * dy + dx;
  }

  getChebyshevHeuristic(source: PathNode, target: PathNode): number {
    let [dx, dy] = this.getDifference(source, target);
    return Math.max(dx, dy);
  }

  getDifference(source: PathNode, target: PathNode): [number, number] {
    return [Math.abs(source.x - target.x), Math.abs(source.y - target.y)]
  }


}

export const move = [
  [-1, 0, 1.0], // left
  [0, -1, 1.0], // up
  [1, 0, 1.0], // right
  [0, 1, 1.0]  // down
];

export function sleep(milliseconds) {
  let timeStart = new Date().getTime();
  while (true) {
    let elapsedTime = new Date().getTime() - timeStart;
    if (elapsedTime > milliseconds) {
      break;
    }
  }
}