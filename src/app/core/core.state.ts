import { SettingsState, settingsReducer } from './settings/settings.reducer';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { initStateFromLocalStorage } from './meta-reducers/init-from-local.reducer';

export const reducers: ActionReducerMap<AppState> = {
  settings: settingsReducer
}

export const metaReducers: MetaReducer<AppState>[] = [
  initStateFromLocalStorage
]

export interface AppState {
  settings: SettingsState;
}