import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '../../../core/core.state';
import * as fromPathfinder from './pathfinder.reducer';

export interface State extends fromRoot.State {
  pathfinder: fromPathfinder.PathfinderState;
}

export const FEATURE_NAME = 'pathfinder';
const getPathfinderState = createFeatureSelector<fromPathfinder.PathfinderState>(
  FEATURE_NAME
);

/*
  Provide a strongly typed API
  Decouple the store from the components
  Encapsulate complex data transformations
  Reusable
  Memoized

  Can compose selectors together to create more complex selectors
  Should build basic selectors for bits of store, then compose those together to select things from other selectors
*/

export const getNodes = createSelector(
  getPathfinderState,
  state => state.nodes
)


// export const getTemp = createSelector(
//   getPathfinderFeatureState,
//   state => state.property
// );