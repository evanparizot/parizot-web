import { SettingsActions, SettingsActionTypes } from './settings.actions';

export interface SettingsState {
  theme: string;
}

const initialState: SettingsState = {
  theme: 'DARK-THEME'
}

export function settingsReducer(state: SettingsState | undefined, action: SettingsActions) {
  return reducer(state, action);
}

export function reducer(state = initialState, action: SettingsActions): SettingsState {
  switch (action.type) {
    case SettingsActionTypes.SetTheme:
      return {
        ...state,
        theme: action.payload
      }


    default:
      return state;
  }
}