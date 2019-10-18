import { PathfinderActions, PathfinderActionTypes } from './pathfinder.actions';

export interface PathfinderState {
  nodes: number[][];
}

const initialState: PathfinderState = {
  nodes: [[1,2,3,4,5],[1,2,3,4,5]]
};

export function reducer(state = initialState, action: PathfinderActions): PathfinderState {
  switch(action.type) {
    // case PathfinderActionTypes.DrawNode:
    //   return {
    //     ...state,

    //   };

    default:
      return state;
  }
}