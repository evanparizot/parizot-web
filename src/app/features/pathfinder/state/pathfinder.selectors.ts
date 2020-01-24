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

export const selectPathfinderSettings = createSelector(
  selectPathfinder,
  (state) => state.settings
);

export const selectAlgorithm = createSelector(
  selectPathfinder,
  (state) => state.settings.algorithm
);

export const selectHeuristic = createSelector(
  selectPathfinder,
  (state) => state.settings.heuristic
);

export const selectOptionAllowDiagonal = createSelector(
  selectPathfinder,
  (state) => state.settings.allowDiagonal
);

export const selectOptionBiDirectional = createSelector(
  selectPathfinder,
  (state) => state.settings.biDirectional
);

export const selectOptionDontCrossCorners = createSelector(
  selectPathfinder,
  (state) => state.settings.dontCrossCorners
);

export const selectOptionWeight = createSelector(
  selectPathfinder,
  (state) => state.settings.weight
);