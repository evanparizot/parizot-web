import { createAction, props } from '@ngrx/store';
import { PathNode } from '../models/node';
import { Settings } from '.';

// ---------------------------------------------------------------
//      Settings manipulation
// ---------------------------------------------------------------
//#region
export const actionPathfinderSetPathfinderSettings = createAction(
  '[Pathfinder] Set Pathfinder Settings',
  props<{ settings: Settings }>()
);

export const actionPathfinderSetAlgorithm = createAction(
  '[Pathfinder] Set Algorithm',
  props<{ algorithm: string }>()
);

export const actionPathfinderSetHeuristic = createAction(
  '[Pathfinder] Set Heuristic',
  props<{ heuristic: string }>()
);

export const actionPathfinderSetOptionAllowDiagonal = createAction(
  '[Pathfinder] Set option: Allow Diagonal',
  props<{ allowDiagonal: boolean }>()
);

export const actionPathfinderSetOptionBiDirectional = createAction(
  '[Pathfinder] Set option: Bi-Directional',
  props<{ biDirectional: boolean }>()
);

export const actionPathfinderSetOptionDontCrossCorners = createAction(
  '[Pathfinder] Set option: Dont Cross Corners',
  props<{ dontCrossCorners: boolean }>()
);

export const actionPathfinderSetOptionWeight = createAction(
  '[Pathfinder] Set option: Allow Diagonal',
  props<{ weight: number }>()
);

export const actionPathfinderClearSettings = createAction(
  '[Pathfinder] Clear settings'
);
//#endregion

// ---------------------------------------------------------------
//      Execution events
// ---------------------------------------------------------------
//#region
export const actionPathfinderStartSearch = createAction(
  '[Pathfinder] Start Search'
);

export const actionPathfinderPauseSearch = createAction(
  '[Pathfinder] Pause Search'
);

export const actionPathfinderStopSearch = createAction(
  '[Pathfinder] Stop Search'
);
//#endregion

// ---------------------------------------------------------------
//      Board events
// ---------------------------------------------------------------
//#region
export const actionPathfinderSetStartNode = createAction(
  '[Pathfinder] Set Start Node',
  props<{ startNode: PathNode }>()
);

export const actionPathfinderSetFinishNode = createAction(
  '[Pathfinder] Set Finish Node',
  props<{ finishNode: PathNode }>()
);

export const actionPathfinderSetNodes = createAction(
  '[Pathfinder] Set Nodes',
  props<{ nodes: PathNode[][] }>()
);

export const actionPathfinderClearBoard = createAction(
  '[Pathfinder] Clear board',
);

export const actionPathfinderClearWalls = createAction(
  '[Pathfinder] Clear walls'
);

export const actionPathfinderClearPath = createAction(
  '[Pathfinder] Clear path'
);

export const actionPathfinderSetSpeed = createAction(
  '[Pathfinder] Set speed'
);
//#endregion

// ---------------------------------------------------------------
//      Algorithm events
// ---------------------------------------------------------------
//#region

//#endregion
