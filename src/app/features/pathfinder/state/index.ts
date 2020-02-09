import { PathNode } from './../models/node';

/*
  Provide a strongly typed API
  Decouple the store from the components
  Encapsulate complex data transformations
  Reusable
  Memoized

  Can compose selectors together to create more complex selectors
  Should build basic selectors for bits of store, then compose those together to select things from other selectors
*/

export interface PathfinderState {
  settings: Settings;
  nodes: PathNode[][];
  startNode: PathNode;
  finishNode: PathNode;
  search: boolean;
}

export class Settings {
  algorithm: string;
  heuristic: string;
  allowDiagonal: boolean;
  biDirectional: boolean;
  dontCrossCorners: boolean;
  weight: number;
}

export class AStarDetails {
  openSet: PathNode[];
  closedSet: PathNode[];
}