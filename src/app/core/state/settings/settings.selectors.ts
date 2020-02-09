import { createSelector, createFeatureSelector } from '@ngrx/store';
import { SettingsState, State } from './index';

export const FEATURE_NAME = 'settings';

export const selectSettings = createFeatureSelector<State, SettingsState>(FEATURE_NAME);

export const selectTheme = createSelector(
  selectSettings,
  settings => settings.theme.toLowerCase()
);

export const selectDisableFooter = createSelector(
  selectSettings,
  settings => settings.disableFooter
);
