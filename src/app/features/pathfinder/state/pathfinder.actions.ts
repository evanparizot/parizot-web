import {Action} from '@ngrx/store';

/*
  Actions get dispatched by components (this.store.dispatch())
*/

export enum PathfinderActionTypes {
  InitializeNodes = '[Pathfinder] Initialize Nodes',
  DrawNode = '[Pathfinder] Draw Node'
}


export class DrawNode implements Action {
  readonly type = PathfinderActionTypes.DrawNode;

  // constructor(public payload:boolean) {}
}



export type PathfinderActions =
  DrawNode;