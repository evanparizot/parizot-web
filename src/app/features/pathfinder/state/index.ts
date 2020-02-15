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

  searching: boolean;
  pauseSearch: boolean;

  aStarDetails: {
    openSet: PathNode[];
    closedSet: PathNode[];
  }
}

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

  searching: false,
  pauseSearch: false,

  aStarDetails: {
    openSet: new Array<PathNode>(),
    closedSet: new Array<PathNode>()
  }
}

export class Settings {
  algorithm: string;
  heuristic: string;
  allowDiagonal: boolean;
  biDirectional: boolean;
  dontCrossCorners: boolean;
  weight: number;
}
