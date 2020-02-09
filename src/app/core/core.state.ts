import { settingsReducer } from './state/settings/settings.reducer';
import { ActionReducerMap, MetaReducer, createFeatureSelector } from '@ngrx/store';
import { initStateFromLocalStorage } from './meta-reducers/init-from-local.reducer';
import { routerReducer } from '@ngrx/router-store';

export const reducers: ActionReducerMap<AppState> = {
  settings: settingsReducer,
  router: routerReducer
}

export const metaReducers: MetaReducer<AppState>[] = [
  initStateFromLocalStorage
];

export interface AppState {

}