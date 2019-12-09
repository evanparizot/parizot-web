import { props, createAction } from '@ngrx/store';

export const actionSettingsSetTheme = createAction(
  '[Settings] Set Theme',
  props<{ theme: string }>()
)