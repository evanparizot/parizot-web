import { AppState } from '../../core.state';

export interface SettingsState {
  theme: string;
  disableFooter: boolean;
}

export interface State extends AppState {
  settings: SettingsState;
}
