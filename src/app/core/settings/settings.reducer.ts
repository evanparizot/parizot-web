import { AppState } from './../core.state';
import { actionSettingsSetTheme } from './settings.actions';
import { createReducer, on, Action } from '@ngrx/store'
import { SettingsState } from './settings.model';


const initialState: SettingsState = {
  theme: 'DARK-THEME'
}

const reducer = createReducer(
  initialState,
  on(
    actionSettingsSetTheme,
    (state, action) => ({ ...state, ...action })
  )
);

export function settingsReducer(
  state: SettingsState | undefined,
  action: Action
) {
  return reducer(state, action);
}
