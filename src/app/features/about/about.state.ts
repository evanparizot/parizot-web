import { createFeatureSelector, ActionReducerMap } from "@ngrx/store";
import { AboutState } from "./state";
import { AppState } from "src/app/core/core.state";

export const FEATURE_NAME = "about";

export const selectAbout = createFeatureSelector<State, AboutState>(
  FEATURE_NAME
);

export interface State extends AppState {
  about: AboutState;
}
