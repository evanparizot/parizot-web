import { createAction, props } from '@ngrx/store';
import { PathNode } from '../models/node';

export const actionPathfinderInitializeNodes = createAction(
  '[Pathfinder] Initialize Nodes',
  props<{ nodes: PathNode[][] }>()
);
