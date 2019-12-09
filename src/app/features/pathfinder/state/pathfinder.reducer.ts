import { actionPathfinderInitializeNodes } from './pathfinder.actions';
import { PathfinderState } from '.';
import { reducers } from 'src/app/core/core.state';
import { Action, createReducer, on } from '@ngrx/store';

/*
  Reducers alter a slice of state and returns a new state. Actions trigger reducers by passing an action.
  Reducers take actions and state to produce new state and store it in the Store

  Reducers should be pure functions
*/

export const initialState: PathfinderState = {
  nodes: []
}

const reducer = createReducer(
  initialState,
  on(actionPathfinderInitializeNodes, (state, { nodes }) => ({
    ...state,
    nodes
  }))
)

export function pathfinderReducer(state: PathfinderState | undefined, action: Action) {
  return reducer(state, action);
}