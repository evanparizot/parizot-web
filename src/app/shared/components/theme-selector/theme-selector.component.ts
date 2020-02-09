import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { actionSettingsSetTheme } from 'src/app/core/state/settings/settings.actions';
import { selectSettings } from 'src/app/core/state/settings/settings.selectors';
import { SettingsState, State } from 'src/app/core/state/settings';

@Component({
  selector: 'app-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.scss']
})
export class ThemeSelectorComponent implements OnInit {

  settings$: Observable<SettingsState>;

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.settings$ = this.store.pipe(select(selectSettings));
  }

  setTheme(theme:string) {
    this.store.dispatch(actionSettingsSetTheme({theme}))
  }

}
