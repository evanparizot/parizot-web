import { selectPathfinding, PathfindingState } from './../pathfinder.state';
import { createSelector } from '@ngrx/store';
import { create } from 'domain';

export const selectPathfinder = createSelector(
  selectPathfinding,
  (state: PathfindingState) => state.pathfinder
);

// Settings Selectors
export const selectPathfinderSettings = createSelector(
  selectPathfinder,
  (state) => state.settings
);

export const selectAlgorithm = createSelector(
  selectPathfinderSettings,
  (settings) => settings.algorithm
);

export const selectHeuristic = createSelector(
  selectPathfinderSettings,
  (settings) => settings.heuristic
);

export const selectOptionAllowDiagonal = createSelector(
  selectPathfinderSettings,
  (settings) => settings.allowDiagonal
);

export const selectOptionBiDirectional = createSelector(
  selectPathfinderSettings,
  (settings) => settings.biDirectional
);

export const selectOptionDontCrossCorners = createSelector(
  selectPathfinderSettings,
  (settings) => settings.dontCrossCorners
);

export const selectOptionWeight = createSelector(
  selectPathfinderSettings,
  (settings) => settings.weight
);


// Node selection
export const selectNodes = createSelector(
  selectPathfinder,
  (state) => state.nodes
);

export const selectStartNode = createSelector(
  selectPathfinder,
  (state) => state.startNode
);

export const selectFinishNode = createSelector(
  selectPathfinder,
  (state) => state.finishNode
);



export const selectPathfinderSearch = createSelector(
  selectPathfinder,
  (state) => state.search
);