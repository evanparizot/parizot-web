import { selectSettings } from './../../../core/settings/index';
import { SettingsState } from './../../../core/settings/settings.model';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/core/settings/settings.model';
import { Observable } from 'rxjs';
import { actionSettingsSetTheme } from 'src/app/core/settings/settings.actions';

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
