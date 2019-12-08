import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PathfinderState } from './pathfinder.reducer';
import { AppState } from '../../../core/core.state';

export interface State extends AppState {
  pathfinder: PathfinderState;
}

export const FEATURE_NAME = 'pathfinder';
const getPathfinderState = createFeatureSelector<PathfinderState>(
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