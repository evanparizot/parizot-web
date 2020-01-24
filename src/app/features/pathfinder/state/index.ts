import { PathNode } from './../models/node';
import { AlgorithmOptions, Settings } from '../models/algorithm';

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
  startNode: Node;
  finishNode: Node;
  search: boolean;
}
