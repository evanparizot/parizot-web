import {Action} from '@ngrx/store';

export enum PathfinderActionTypes {
  DrawNode = '[Pathfinder] Draw Node'
}


export class DrawNode implements Action {
  readonly type = PathfinderActionTypes.DrawNode;

  // constructor(public payload:boolean) {}
}



export type PathfinderActions =
  DrawNode;