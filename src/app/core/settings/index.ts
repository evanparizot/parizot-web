import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SettingsState } from './settings.reducer';
import { AppState } from '../core.state';

const selectSettingsState = createFeatureSelector<AppState, SettingsState>('settings');

export const selectTheme = createSelector(
  selectSettingsState,
  state => state.theme.toLowerCase()
);