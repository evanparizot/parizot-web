import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect, Effect } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { State } from '../pathfinder.state';
import { actionPathfinderStartSearch } from './pathfinder.actions';
import { withLatestFrom, tap, map } from 'rxjs/operators';
import { selectNodes, selectPathfinderSettings, selectPathfinderSearch } from './pathfinder.selectors';
import { AlgorithmService } from '../services/algorithm.service';

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
export class PathfinderEffects {
  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private algorithmService: AlgorithmService
  ) { }

  @Effect()
  startSearchAlgorithm$ = this.actions$.pipe(
    ofType(actionPathfinderStartSearch),
    withLatestFrom(
      this.store.pipe(select(selectNodes)),
      this.store.pipe(select(selectPathfinderSettings)),
      this.store.pipe(select(selectPathfinderSearch))
      ),
    map(([, nodes, settings, search]) => {
      
    })
  )

  /*
    AStart

    var open list (can be a heap)
    var closed list 
    add start to open

    while open set not empty:
      current = node from opent with lowest f
      remove current from open
      add current to closed

      if current == goal:
        return
      
      foreach neighbor of current:
        if neighbor is not traversable || neighbor == closed:
          continue
        if new path to neighbor is shorter || neighbor not in open:
          set f cost of neighbor
          set parent of neighbor to current
          if neighbor not in open:
            add neighbor to open
  */

}
