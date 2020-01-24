import { AppState } from '../../core/core.state';
import { pathfinderReducer } from './state/pathfinder.reducer';
import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import { PathfinderState } from './state';

export const FEATURE_NAME = 'pathfinding';

export const selectPathfinding = createFeatureSelector<State, PathfindingState>(
  FEATURE_NAME
);

export const reducers: ActionReducerMap<PathfindingState> = {
  pathfinder: pathfinderReducer
};

export interface PathfindingState {
  pathfinder: PathfinderState;
}

export interface State extends AppState {
  pathfinding: PathfindingState
}