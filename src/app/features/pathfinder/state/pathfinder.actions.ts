import {Action} from '@ngrx/store';
import { PathNode } from '../models/node';

/*
  Actions get dispatched by components (this.store.dispatch())
*/

export enum PathfinderActionTypes {
  InitializeNodes = '[Pathfinder] Initialize Nodes',
  DrawNode        = '[Pathfinder] Draw Node'
}


export class DrawNode implements Action {
  readonly type = PathfinderActionTypes.DrawNode;

  // constructor(public payload:boolean) {}
}

export class InitializeNodes implements Action {
  readonly type = PathfinderActionTypes.InitializeNodes;

  constructor(public nodes: PathNode[][]) {}
}


export type PathfinderActions =
  InitializeNodes |
  DrawNode;