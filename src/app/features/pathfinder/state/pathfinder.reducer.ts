import {
  actionPathfinderSetAlgorithm,
  actionPathfinderSetHeuristic,
  actionPathfinderSetOptionAllowDiagonal,
  actionPathfinderSetOptionBiDirectional,
  actionPathfinderSetOptionDontCrossCorners,
  actionPathfinderSetOptionWeight,
  actionPathfinderSetPathfinderSettings,
  actionPathfinderClearBoard,
  actionPathfinderClearSettings,
  actionPathfinderStartSearch,
  actionPathfinderPauseSearch,
  actionPathfinderStopSearch,
  actionPathfinderSetStartNode,
  actionPathfinderSetFinishNode,
  actionPathfinderSetNodes,
} from './pathfinder.actions';
import { PathfinderState } from '.';
import { reducers } from 'src/app/core/core.state';
import { Action, createReducer, on, combineReducers } from '@ngrx/store';
import { AlgorithmOptions } from '../models/algorithm';

/*
  Reducers alter a slice of state and returns a new state. Actions trigger reducers by passing an action.
  Reducers take actions and state to produce new state and store it in the Store

  Reducers should be pure functions
*/

export const initialState: PathfinderState = {
  settings: {
    algorithm: '',
    heuristic: '',
    allowDiagonal: false,
    biDirectional: false,
    dontCrossCorners: false,
    weight: 1
  },
  nodes: [],
  startNode: null,
  finishNode: null,
  search: false
}

const reducer = createReducer(
  initialState,

  // Board actions
  on(actionPathfinderSetNodes, (state, { nodes }) => ({
    ...state,
    nodes
  })),

  // Settings
  on(actionPathfinderSetPathfinderSettings, (state, { settings }) => ({
    ...state,
    settings
  })),
  on(actionPathfinderSetAlgorithm, (state, { algorithm }) => ({
    ...state,
    settings: { ...state.settings, algorithm }
  })),
  on(actionPathfinderSetHeuristic, (state, { heuristic }) => ({
    ...state,
    settings: { ...state.settings, heuristic }
  })),
  on(actionPathfinderSetOptionAllowDiagonal, (state, { allowDiagonal }) => ({
    ...state,
    settings: { ...state.settings, allowDiagonal }
  })),
  on(actionPathfinderSetOptionBiDirectional, (state, { biDirectional }) => ({
    ...state,
    settings: { ...state.settings, biDirectional }
  })),
  on(actionPathfinderSetOptionDontCrossCorners, (state, { dontCrossCorners }) => ({
    ...state,
    settings: { ...state.settings, dontCrossCorners }
  })),
  on(actionPathfinderSetOptionWeight, (state, { weight }) => ({
    ...state,
    settings: { ...state.settings, weight }
  })),
  on(actionPathfinderClearSettings, (state) => ({
    ...state,
    settings: {
      algorithm: initialState.settings.algorithm,
      heuristic: initialState.settings.heuristic,
      allowDiagonal: initialState.settings.allowDiagonal,
      biDirectional: initialState.settings.biDirectional,
      dontCrossCorners: initialState.settings.dontCrossCorners,
      weight: initialState.settings.weight
    }
  })),

  // Execution Events
  on(actionPathfinderStartSearch, (state) => ({
    ...state,
    search: true
  })),
  on(actionPathfinderPauseSearch, (state) => ({
    ...state,
    search: false
  })),
  on(actionPathfinderStopSearch, (state) => ({
    ...state,
    search: false
  })),

  // Node events
  on(actionPathfinderSetStartNode, (state, { startNode }) => ({
    ...state,
    startNode: startNode
  })),
  on(actionPathfinderSetFinishNode, (state, { finishNode }) => ({
    ...state,
    finishNode: finishNode
  }))
)

export function pathfinderReducer(state: PathfinderState | undefined, action: Action) {
  return reducer(state, action);
}
