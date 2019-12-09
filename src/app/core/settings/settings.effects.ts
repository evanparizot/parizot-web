import { selectTheme } from './index';
import { Store, select } from '@ngrx/store';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { merge, of } from 'rxjs';
import { withLatestFrom, tap } from 'rxjs/operators';
import { OverlayContainer } from '@angular/cdk/overlay';
import { actionSettingsSetTheme } from './settings.actions';
import { State } from './settings.model';

const INIT = of('anms-init-effect-trigger');

@Injectable()
export class SettingsEffects {
  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private overlayContainer: OverlayContainer
  ){}

  updateTheme = createEffect(
    () =>
      merge(INIT, this.actions$.pipe(ofType(actionSettingsSetTheme))).pipe(
        withLatestFrom(this.store.pipe(select(selectTheme))),
        tap(([action, effectiveTheme]) => {
          const classList = this.overlayContainer.getContainerElement()
            .classList;
          const toRemove = Array.from(classList).filter((item: string) =>
            item.includes('-theme')
          );
          if (toRemove.length) {
            classList.remove(...toRemove);
          }
          classList.add(effectiveTheme);
        })
      ),
    { dispatch: false }
  );
  
}