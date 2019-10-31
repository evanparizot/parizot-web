import { Action } from '@ngrx/store';

export enum SettingsActionTypes {
  SetTheme = '[Settings] Set Theme'
}

export class SetTheme implements Action {
  readonly type = SettingsActionTypes.SetTheme;
  constructor(public payload: string) {}
}

export type SettingsActions = SetTheme;