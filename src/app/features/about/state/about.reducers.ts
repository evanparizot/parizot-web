import { AboutState } from ".";
import { createReducer, Action } from "@ngrx/store";
import { profile } from "../models/about.data";

export const initialState: AboutState = {
  profile: profile
};

const reducer = createReducer(initialState);

export function aboutReducer(state: AboutState | undefined, action: Action) {
  return reducer(state, action);
}
