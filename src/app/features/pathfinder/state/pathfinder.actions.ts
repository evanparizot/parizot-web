import { createAction, props } from '@ngrx/store';
import { PathNode } from '../models/node';
import { Settings } from '.';

// ---------------------------------------------------------------
//      Settings Actions
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
//      Execution Actions
// ---------------------------------------------------------------
//#region
export const actionPathfinderStartSearch = createAction(
  '[Pathfinder] Start Search'
);

export const actionPathfinderTogglePauseSearch = createAction(
  '[Pathfinder] Toggle Pause Search'
);
//#endregion

// ---------------------------------------------------------------
//      Board & Node Actions
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

export const actionPathfinderInitializeBoard = createAction(
  '[Pathfinder] Initialize Board',
  props<{ x: number, y: number }>()
);

export const actionPathfinderToggleWall = createAction(
  '[Pathfinder] Toggle Wall',
  props<{ node: PathNode }>()
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
