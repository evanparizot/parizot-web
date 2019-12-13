import { createAction, props } from '@ngrx/store';
import { PathNode } from '../models/node';
import { AlgorithmOptions, PathfinderSettings } from '../models/algorithm';

export const actionPathfinderInitializeNodes = createAction(
  '[Pathfinder] Initialize Nodes',
  props<{ nodes: PathNode[][] }>()
);

export const actionPathfinderSetPathfinderSettings = createAction(
  '[Pathfinder] Set Pathfinder Settings',
  props<{ pathfinderSettings: PathfinderSettings }>()
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

// Node manipulation

export const actionPathfinderSetStartNode = createAction(
  '[Pathfinder] Set Start Node',
  props<{ startNode: Node }>()
);

export const actionPathfinderSetFinishNode = createAction(
  '[Pathfinder] Set Finish Node',
  props<{ finishNode: Node }>()
);