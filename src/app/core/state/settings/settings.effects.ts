import { TitleService } from '../../title/title.service';
import { selectTheme } from './settings.selectors';
import { Store, select } from '@ngrx/store';
import { createEffect, ofType, Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { merge, of } from 'rxjs';
import { withLatestFrom, tap, filter, switchMap } from 'rxjs/operators';
import { OverlayContainer } from '@angular/cdk/overlay';
import { actionSettingsSetTheme, actionSettingsToggleFooter } from './settings.actions';
import { State } from './index';
import { Router, ActivationEnd, ActivationStart } from '@angular/router';

const INIT = of('anms-init-effect-trigger');

@Injectable()
export class SettingsEffects {
  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private overlayContainer: OverlayContainer,
    private router: Router,
    private titleService: TitleService
  ) { }

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

  setTitle = createEffect(
    () =>
      (this.router.events.pipe(filter(event => event instanceof ActivationEnd)))
        .pipe(
          tap(() => {
            this.titleService.setTitle(
              this.router.routerState.snapshot.root
            )
          })
        ),
    { dispatch: false }
  );

  // @Effect({ dispatch: false })
  // showFooter$ = this.actions$.pipe(
  //   ofType(this.router.events.pipe(filter(event => event instanceof ActivationEnd))),
    
  // );

  // showFooter = createEffect(
  //   () =>
  //     (this.router.events.pipe(filter(event => event instanceof ActivationEnd)))
  //       .pipe(
  //         switchMap(() => {

  //           let lastChild = this.router.routerState.snapshot.root;
  //           while (lastChild.children.length) {
  //             lastChild = lastChild.children[0];
  //           }
  //           const { disableFooter } = lastChild.data;
  //           if (disableFooter) {
  //             this.store.dispatch(actionSettingsToggleFooter({ disableFooter: true }));
  //           } else {
  //             this.store.dispatch(actionSettingsToggleFooter({ disableFooter: false }));
  //           }
  //         })
  //       ),
  //   { dispatch: false }
  // )

}