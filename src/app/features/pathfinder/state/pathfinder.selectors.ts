import { selectPathfinding, PathfindingState } from './../pathfinder.state';
import { createSelector } from '@ngrx/store';

export const selectPathfinder = createSelector(
  selectPathfinding,
  (state: PathfindingState) => state.pathfinder
);

export const selectNodes = createSelector(
  selectPathfinder,
  (state) => state.nodes
);