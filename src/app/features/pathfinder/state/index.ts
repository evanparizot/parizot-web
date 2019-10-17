import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '../../../core/state/app.state';
import * as fromPathfinder from './pathfinder.reducer';

export interface State extends fromRoot.State {
  pathfinder: fromPathfinder.PathfinderState;
}

const getPathfinderFeatureState = createFeatureSelector<fromPathfinder.PathfinderState>('pathfinder');

// export const getTemp = createSelector(
//   getPathfinderFeatureState,
//   state => state.property
// );