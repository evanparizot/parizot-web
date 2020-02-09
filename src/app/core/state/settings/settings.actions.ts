import { props, createAction } from '@ngrx/store';

export const actionSettingsSetTheme = createAction(
  '[Settings] Set Theme',
  props<{ theme: string }>()
);

export const actionSettingsToggleFooter = createAction(
  '[Settings] Toggle Footer',
  props<{ disableFooter: boolean }>()
);