import { actionSettingsSetTheme } from './../../../core/settings/settings.actions';
import { selectSettings } from './../../../core/settings/index';
import { SettingsState } from './../../../core/settings/settings.model';
import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/core/settings/settings.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.scss']
})
export class ThemeSelectorComponent implements OnInit {

  constructor(private bottomSheet: MatBottomSheet) { }

  ngOnInit() {
  }

  openThemeOptions(): void {
    this.bottomSheet.open(ThemeSelectorOptions);
  }

}

@Component({
  selector: 'theme-selector-options',
  templateUrl: 'theme-selector-options.component.html',
})
export class ThemeSelectorOptions implements OnInit {

  settings$: Observable<SettingsState>;

  constructor(
    private bottomSheetRef: MatBottomSheetRef<ThemeSelectorOptions>,
    private store: Store<State>
  ) { }

  ngOnInit(): void {
    this.settings$ = this.store.pipe(select(selectSettings));
  }

  onThemeSelect({ value: theme }){
    this.store.dispatch(actionSettingsSetTheme({ theme }));
    this.bottomSheetRef.dismiss();
  }

}