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

export const getNodes = createSelector(
  getPathfinderState,
  state => state.nodes
)


// export const getTemp = createSelector(
//   getPathfinderFeatureState,
//   state => state.property
// );