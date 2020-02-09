import {
  actionPathfinderSetAlgorithm,
  actionPathfinderSetHeuristic,
  actionPathfinderSetOptionAllowDiagonal,
  actionPathfinderSetOptionBiDirectional,
  actionPathfinderSetOptionDontCrossCorners,
  actionPathfinderSetOptionWeight,
  actionPathfinderSetPathfinderSettings,
  actionPathfinderClearSettings,
  actionPathfinderStartSearch,
  actionPathfinderPauseSearch,
  actionPathfinderStopSearch,
  actionPathfinderSetStartNode,
  actionPathfinderSetFinishNode,
  actionPathfinderSetNodes,
  actionPathfinderToggleWall,
  actionPathfinderInitializeBoard,
} from './pathfinder.actions';
import { PathfinderState } from '.';
import { Action, createReducer, on, combineReducers } from '@ngrx/store';
import { produce } from 'immer';
import { PathNodeState, PathNode } from '../models/node';

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
    settings: initialState.settings
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
  on(actionPathfinderInitializeBoard, (state, { x, y }) => ({
    ...state,
    nodes: initializeNodes(x, y)
  })),
  on(actionPathfinderToggleWall, (state, { node }) => ({
    ...state,
    nodes: produce(state.nodes, draft => {
      draft[node.y][node.x].traversable = !draft[node.y][node.x].traversable;
    })
  })),
  on(actionPathfinderSetStartNode, (state, { startNode }) => ({
    ...state,
    startNode: startNode,
    nodes: produce(state.nodes, draft => {
      draft[startNode.y][startNode.x].state = PathNodeState.start;
      if (state.startNode !== null) {
        draft[state.startNode.y][state.startNode.x].state = PathNodeState.unknown;
      }
    })
  })),
  on(actionPathfinderSetFinishNode, (state, { finishNode }) => ({
    ...state,
    finishNode: finishNode,
    nodes: produce(state.nodes, draft => {
      draft[finishNode.y][finishNode.x].state = PathNodeState.finish;
      if (state.finishNode !== null) {
        draft[state.finishNode.y][state.finishNode.x].state = PathNodeState.unknown;
      }
    })
  }))
)

export function pathfinderReducer(state: PathfinderState | undefined, action: Action) {
  return reducer(state, action);
}

export function initializeNodes(width: number, height: number): PathNode[][] {
  let nodes = new Array<Array<PathNode>>();
  for (var y = 0; y < height; y++) {
    let nodeRow: PathNode[] = new Array<PathNode>();
    for (var x = 0; x < width; x++) {
      nodeRow.push(new PathNode(x, y));
    }
    nodes.push(nodeRow);
  }
  return nodes;
}