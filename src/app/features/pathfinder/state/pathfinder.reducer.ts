import { PathfinderActions, PathfinderActionTypes } from './pathfinder.actions';

/*
  Reducers alter a slice of state and returns a new state. Actions trigger reducers by passing an action.
  Reducers take actions and state to produce new state and store it in the Store

  Reducers should be pure functions
*/


export interface PathfinderState {
  nodes: Node[][];
}

const initialState: PathfinderState = {
  nodes: []
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