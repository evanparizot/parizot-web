import { actionPathfinderInitializeNodes, 
  actionPathfinderSetAlgorithm, 
  actionPathfinderSetHeuristic, 
  actionPathfinderSetOptionAllowDiagonal, 
  actionPathfinderSetOptionBiDirectional, 
  actionPathfinderSetOptionDontCrossCorners, 
  actionPathfinderSetOptionWeight, 
  actionPathfinderSetPathfinderSettings 
} from './pathfinder.actions';
import { PathfinderState } from '.';
import { reducers } from 'src/app/core/core.state';
import { Action, createReducer, on } from '@ngrx/store';
import { AlgorithmOptions } from '../models/algorithm';

/*
  Reducers alter a slice of state and returns a new state. Actions trigger reducers by passing an action.
  Reducers take actions and state to produce new state and store it in the Store

  Reducers should be pure functions
*/

export const initialState: PathfinderState = {
  pathfinderSettings: {
    algorithm: '',
    heuristic: '',
    allowDiagonal: false,
    biDirectional: false,
    dontCrossCorners: false,
    weight: 1
  },
  nodes: []
}

const reducer = createReducer(
  initialState,
  on(actionPathfinderInitializeNodes, (state, { nodes }) => ({
    ...state,
    nodes
  })),
  on(actionPathfinderSetPathfinderSettings, (state, { pathfinderSettings })=> ({
    ...state,
    pathfinderSettings
  })),
  on(actionPathfinderSetAlgorithm, (state, { algorithm })=> ({
    ...state,
    pathfinderSettings: { ...state.pathfinderSettings, algorithm }
  })),
  on(actionPathfinderSetHeuristic, (state, { heuristic })=> ({
    ...state,
    pathfinderSettings: { ...state.pathfinderSettings, heuristic }
  })),
  on(actionPathfinderSetOptionAllowDiagonal, (state, { allowDiagonal })=> ({
    ...state,
    pathfinderSettings: { ...state.pathfinderSettings, allowDiagonal }
  })),
  on(actionPathfinderSetOptionBiDirectional, (state, { biDirectional })=> ({
    ...state,
    pathfinderSettings: { ...state.pathfinderSettings, biDirectional }
  })),
  on(actionPathfinderSetOptionDontCrossCorners, (state, { dontCrossCorners })=> ({
    ...state,
    pathfinderSettings: { ...state.pathfinderSettings, dontCrossCorners }
  })),
  on(actionPathfinderSetOptionWeight, (state, { weight })=> ({
    ...state,
    pathfinderSettings: { ...state.pathfinderSettings, weight }
  }))
)

export function pathfinderReducer(state: PathfinderState | undefined, action: Action) {
  return reducer(state, action);
}