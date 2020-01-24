import { AppState } from './../core.state';
import { actionSettingsSetTheme, actionSettingsToggleFooter } from './settings.actions';
import { createReducer, on, Action } from '@ngrx/store'
import { SettingsState } from './settings.model';


const initialState: SettingsState = {
  theme: 'DARK-THEME',
  disableFooter: false
}

const reducer = createReducer(
  initialState,
  on(actionSettingsSetTheme, (state, { theme }) => ({ 
    ...state, 
    theme
  })),
  on(actionSettingsToggleFooter, (state, { disableFooter }) => ({
    ...state,
    disableFooter
  }))
);

export function settingsReducer(
  state: SettingsState | undefined,
  action: Action
) {
  return reducer(state, action);
}
