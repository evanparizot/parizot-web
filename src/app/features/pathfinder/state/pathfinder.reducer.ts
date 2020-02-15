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
  actionPathfinderSetStartNode,
  actionPathfinderSetFinishNode,
  actionPathfinderSetNodes,
  actionPathfinderToggleWall,
  actionPathfinderInitializeBoard,
  actionPathfinderTogglePauseSearch,
} from './pathfinder.actions';
import { PathfinderState, initialState } from '.';
import { Action, createReducer, on } from '@ngrx/store';
import { produce } from 'immer';
import { PathNodeState, PathNode } from '../models/node';
import { actionPathfinderAStarAddToOpenSet, 
  actionPathfinderAStarAddToClosedSet, 
  actionPathfinderAStarAddMultipleToOpenSet, 
  actionPathfinderAStarRemoveFromOpenSet, 
  actionPathfinderUpdateAStar 
} from './astar/astar.actions';
import * as _ from 'lodash';

/*
  Reducers alter a slice of state and returns a new state. Actions trigger reducers by passing an action.
  Reducers take actions and state to produce new state and store it in the Store

  Reducers should be pure functions
*/


const reducer = createReducer(
  initialState,
  // ---------------------------------------------------------------
  //      Settings
  // ---------------------------------------------------------------
  //#region
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
    settings: initialState.settings,
    searching: false,
    pauseSearch: false
  })),
  //#endregion

  // ---------------------------------------------------------------
  //      Execution
  // ---------------------------------------------------------------
  //#region
  on(actionPathfinderStartSearch, (state) => ({
    ...state,
    searching: true,
    pauseSearch: false,
    aStarDetails: { openSet: [], closedSet: [] }
  })),
  on(actionPathfinderTogglePauseSearch, (state) => ({
    ...state,
    pauseSearch: !state.pauseSearch
  })),
  //#endregion

  // ---------------------------------------------------------------
  //      Board & Nodes
  // ---------------------------------------------------------------
  //#region
  on(actionPathfinderSetNodes, (state, { nodes }) => ({
    ...state,
    nodes
  })),
  on(actionPathfinderInitializeBoard, (state, { x, y }) => ({
    ...state,
    startNode: { x: Math.floor(x / 3), y: Math.floor(y / 2), g: 0, h: 0, f: 0, traversable: true, state: PathNodeState.start },
    finishNode: { x: Math.floor((2 * x) / 3), y: Math.floor(y / 2), g: 0, h: 0, f: 0, traversable: true, state: PathNodeState.finish },
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
  })),
  //#endregion

  // ---------------------------------------------------------------
  //      Algorithm: A*
  // ---------------------------------------------------------------
  //#region
  on(actionPathfinderAStarAddToOpenSet, (state, { node }) => ({
    ...state,
    aStarDetails: {
      ...state.aStarDetails,
      openSet: produce(state.aStarDetails.openSet, draft => { draft.push(node) })
    }
  })),
  on(actionPathfinderAStarAddToClosedSet, (state, { node }) => ({
    ...state,
    nodes: produce(state.nodes, draft => {
      if (draft[node.y][node.x].state != (PathNodeState.start || PathNodeState.finish)) {
        draft[node.y][node.x].state = PathNodeState.closed
      }
    }),
    aStarDetails: {
      ...state.aStarDetails,
      closedSet: produce(state.aStarDetails.closedSet, draft => { draft.push(node) })
    }
  })),
  on(actionPathfinderAStarRemoveFromOpenSet, (state, { node }) => ({
    ...state,
    aStarDetails: {
      ...state.aStarDetails,
      openSet: state.aStarDetails.openSet.filter(setNode => setNode.x == node.x && setNode.y == node.y )
    }
  })),
  on(actionPathfinderAStarAddMultipleToOpenSet, (state, { nodes }) => ({
    ...state,
    aStarDetails: {
      ...state.aStarDetails,
      openSet: produce(state.aStarDetails.openSet, draft => { nodes.forEach(x => {draft.push(x)} )})
    }
  })),
  on(actionPathfinderUpdateAStar, (state, { openSetNodes, toClose }) => ({
    ...state,
    nodes: produce(state.nodes, draft => {
      if(toClose.state != PathNodeState.start){
        draft[toClose.y][toClose.x].state = PathNodeState.closed;
      }
      openSetNodes.forEach(node => {
        draft[node.y][node.x].state = PathNodeState.opened;
      });
    }),
    aStarDetails: {
      ...state.aStarDetails,
      openSet: produce(state.aStarDetails.openSet, draft => { 
        _.remove(draft, function(n) { return (n.x == toClose.x && n.y == toClose.y)})
        openSetNodes.forEach(x => draft.push(x));
      }),
      closedSet: produce(state.aStarDetails.closedSet, draft => { draft.push(toClose) })
    }
  }))

  //#endregion
);

export function initializeNodes(width: number, height: number): PathNode[][] {
  let nodes = new Array<Array<PathNode>>();

  for (var y = 0; y < height; y++) {
    let nodeRow: PathNode[] = new Array<PathNode>();
    for (var x = 0; x < width; x++) {
      if (x == Math.floor(width / 3) && y == Math.floor(height / 2)) {
        nodeRow.push(new PathNode(x, y, 0, 0, 0, null, true, PathNodeState.start));
      } else if (x == Math.floor((2 * width) / 3) && y == Math.floor(height / 2)) {
        nodeRow.push(new PathNode(x, y, 0, 0, 0, null, true, PathNodeState.finish));
      } else {
        nodeRow.push(new PathNode(x, y, 0, 0, 0, null, true, PathNodeState.unknown));
      }
    }
    nodes.push(nodeRow);
  }
  return nodes;
}

export function pathfinderReducer(state: PathfinderState | undefined, action: Action) {
  return reducer(state, action);
}