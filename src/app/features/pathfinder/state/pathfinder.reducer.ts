import { PathfinderActions, PathfinderActionTypes } from './pathfinder.actions';

export interface PathfinderState {

}

const initialState: PathfinderState = {

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