import { selectTheme } from './settings.selectors';
import { Store, select } from '@ngrx/store';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { of, merge } from 'rxjs';
import { withLatestFrom, map } from 'rxjs/operators';
import { OverlayContainer } from '@angular/cdk/overlay';
import { actionSettingsSetTheme, actionSettingsToggleFooter } from './settings.actions';
import { State } from './index';
import { ROUTER_NAVIGATED } from '@ngrx/router-store';
import { selectRouterData } from '../router/router.selectors';
import { Title } from '@angular/platform-browser';

const INIT = of('anms-init-effect-trigger');

@Injectable()
export class SettingsEffects {
  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private overlayContainer: OverlayContainer,
    private titleService: Title
  ) { }

  @Effect({ dispatch: false })
  updateTheme$ = merge(INIT, this.actions$.pipe(ofType(actionSettingsSetTheme))).pipe(
    withLatestFrom(this.store.pipe(select(selectTheme))),
    map(([, theme]) => {
      const classList = this.overlayContainer.getContainerElement()
        .classList;
      const toRemove = Array.from(classList).filter((item: string) =>
        item.includes('-theme')
      );
      if (toRemove.length) {
        classList.remove(...toRemove);
      }
      classList.add(theme);
    })
  );

  @Effect({ dispatch: false })
  setTitle$ = this.actions$.pipe(
    ofType(ROUTER_NAVIGATED),
    withLatestFrom(this.store.pipe(select(selectRouterData))),
    map(([, data]) => {
      let title: string = data["title"];
      if (title !== null && title !== undefined && title.trim() !== '') {
        this.titleService.setTitle(title);
      } else {
        this.titleService.setTitle('Evan Parizot');
      }
    })
  );

  @Effect()
  showFooter$ = this.actions$.pipe(
    ofType(ROUTER_NAVIGATED),
    withLatestFrom(this.store.pipe(select(selectRouterData))),
    map(([, data]) => {
      return actionSettingsToggleFooter({ disableFooter: !!data["disableFooter"] });
    })
  );
}
