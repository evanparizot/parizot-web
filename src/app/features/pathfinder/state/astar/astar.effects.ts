import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect, Effect } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { State } from '../../pathfinder.state';
import { actionPathfinderAStarAddToOpenSet, actionPathfinderAStarNoop, actionPathfinderAStarAddToClosedSet, actionPathfinderAStarRemoveFromOpenSet, actionPathfinderAStarAddMultipleToOpenSet, actionPathfinderUpdateAStar } from './astar.actions';
import { withLatestFrom, mergeMap, map, filter, switchMap, concatMap } from 'rxjs/operators';
import { selectNodes, selectStartNode, selectFinishNode, selectPathfinderSettings, selectHeuristic, selectPathfinderPauseSearch, selectAlgorithm } from '../pathfinder.selectors';
import { selectPathfinderAStarClosedSet, selectPathfinderAStarOpenSet, selectPathfinderAStar } from './astar.selectors';
import { actionPathfinderStartSearch, actionPathfinderTogglePauseSearch } from '../pathfinder.actions';
import { selectSettings } from 'src/app/core/state/settings/settings.selectors';
import { HeuristicService } from '../../services/heuristic.service';
import produce from 'immer';
import { PathNode } from '../../models/node';
import { of } from 'rxjs';

// Effects take an action, do work and dispatch a new action
/*
  switchMap - cancels the current subscription/request and can cause race condition 
            - use for get requests or cancelable requests like searches
  concatMap - runs subscriptions/requests in order and is less performant
            - use for get, post and put requests when order is important
  mergeMap  - runs subscriptions/requests in parallel
            - use for put, post and delete methods when order is not important
  exhaustMap- ignores all subsequent subscriptions/requests until it completes
            - use for logins (don't want more requests until the intial one is complete)
*/

@Injectable()
export class AStarEffects {
  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private heuristicService: HeuristicService
  ) { }

  @Effect()
  aStarSearchTrigger$ = this.actions$.pipe(
    ofType(actionPathfinderStartSearch),
    withLatestFrom(this.store.pipe(select(selectAlgorithm))),
    filter(([, algorithm]) => algorithm === "A*"),
    withLatestFrom(
      this.store.pipe(select(selectStartNode)),
      this.store.pipe(select(selectFinishNode)),
      this.store.pipe(select(selectHeuristic))
    ),
    map(([, start, finish, heuristic]) => {
      console.log("A star start");
      // Need to set f, g, h values for start node (all zero)
      // Need to add start node to open set
      // Need to trigger open set processing (other effect)

      // f(n) = g(n) + h(n)
      // g(n) = distance from starting node
      // h(n) = heuristic cost

      return actionPathfinderAStarAddToOpenSet({ node: produce(start, () => { }) });
    })
  );

  // https://bezhermoso.github.io/til/dispatch-multiple-actions-from-a-single-ngrx-effect-stream/

  @Effect()
  astarSearch$ = this.actions$.pipe(
    ofType(
      // actionPathfinderAStarAddToOpenSet,
      // actionPathfinderUpdateAStar,
      // actionPathfinderTogglePauseSearch
    ),
    withLatestFrom(this.store.pipe(select(selectAlgorithm))),
    filter(([, algorithm]) => algorithm === "A*"),

    withLatestFrom(
      this.store.pipe(select(selectNodes)),
      this.store.pipe(select(selectStartNode)),
      this.store.pipe(select(selectFinishNode)),
      this.store.pipe(select(selectPathfinderAStar)),
      this.store.pipe(select(selectPathfinderSettings))
    ),
    concatMap(([, nodes, start, finish, astar, settings]) => {
      if (true) {
        if (astar.openSet.length != 0) {
          // sleep(400);
          // Find node from open set with lowest f
          // https://codeburst.io/javascript-finding-minimum-and-maximum-values-in-an-array-of-objects-329c5c7e22a2
          let nodeWithLowestF = produce(astar.openSet.reduce((min, p) => p.f < min.f ? p : min, astar.openSet[0]), copy => { });

          if (nodeWithLowestF.x == finish.x && nodeWithLowestF.y == finish.y) {
            // if current is goal, done. reconstruct path
            return of(actionPathfinderAStarNoop());
            return;
          }

          // remove from open, add to closed
          // dispatchFew(this.store)(actionPathfinderAStarAddToClosedSet({ node: nodeWithLowestF }), actionPathfinderAStarRemoveFromOpenSet({ node: nodeWithLowestF }));

          // foreach neighbor of current:
          // if neighbor is not traversable || neighbor == closed:
          //   continue
          // if new path to neighbor is shorter || neighbor not in open:
          //   set f cost of neighbor
          //   set parent of neighbor to current
          //   if neighbor not in open:
          //     add neighbor to open

          let children: PathNode[] = [];

          move.forEach(pos => {
            let [x, y] = [nodeWithLowestF.x + pos[0], nodeWithLowestF.y + pos[1]];

            // Check if in bounds (if no, continue)
            if (x < 0 || y < 0 || y > nodes.length || x > nodes[0].length) {
              return;
            }

            // Check if traversable (wall) (if no, continue)
            if (nodes[y][x].traversable == false) {
              return;
            }

            // Check if in visited list (if yes, continue) or check if node state is closed
            if (astar.closedSet.filter(node => (node.x == x && node.y == y)).length > 0) {
              return;
            }

            // Calculate g, h, f
            // Set parent to current (nodeWithLowestF)
            let node = new PathNode(x, y);
            node.g = nodeWithLowestF.g + pos[2];
            node.h = this.heuristicService.getHCost(node, finish, "manhattan");
            node.f = node.g + node.h;
            // node.parent = nodeWithLowestF;

            // Check if already in unvisited and g cost is already lower (if yes, continue)
            var lower = false;
            astar.openSet.filter(node => (node.x == x && node.y == y)).forEach(x => {
              if(x.g < node.g){
                lower = true;
                return;
              }
            });
            if(lower) {
              return;
            }

            // Add to children array
            children.push(node);
          })

          // Add children to unvisited list
          // this.store.dispatch(actionPathfinderUpdateAStar({openSetNodes: children, toClose: nodeWithLowestF }));
          return of(actionPathfinderUpdateAStar({ openSetNodes: children, toClose: nodeWithLowestF }));
          // return of(actionPathfinderAStarAddMultipleToOpenSet({nodes: children}))
          // return of(actionPathfinderAStarAddMultipleToOpenSet({ nodes: children }));
        }

        // If open list is zero, means there's no solution. Return error message.

      }
      return of(actionPathfinderAStarNoop());
    })
  );
}

export const move = [
  [-1, 0, 1.0], // left
  [0, -1, 1.0], // up
  [1, 0, 1.0], // right
  [0, 1, 1.0]  // down
];

export const moveDiagonal = [
  [-1, 0, 1.0], // left
  [-1, -1, 1.414], // left-up
  [0, -1, 1.0], // up
  [1, -1, 1.414], // right-up
  [1, 0, 1.0], // right
  [1, 1, 1.414], // right-down
  [0, 1, 1.0], // down
  [-1, 1, 1.414] // left-down
]

export const dispatchFew = <T>(store$: Store<T>) => (...actions: any[]) => actions.forEach(a => store$.dispatch(a));

export function sleep(milliseconds) {
  let timeStart = new Date().getTime();
  while (true) {
    let elapsedTime = new Date().getTime() - timeStart;
    if(elapsedTime > milliseconds) {
      break;
    }
  }
}