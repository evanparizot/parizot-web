import { createSelector } from '@ngrx/store';
import { selectPathfinder } from '../pathfinder.selectors';

export const selectPathfinderAStar = createSelector(
    selectPathfinder,
    (state) => state.aStarDetails
);

export const selectPathfinderAStarOpenSet = createSelector(
    selectPathfinderAStar,
    (astar) => astar.openSet
);

export const selectPathfinderAStarClosedSet = createSelector(
    selectPathfinderAStar,
    (astar) => astar.closedSet
);