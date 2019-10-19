import { Router, NavigationEnd } from '@angular/router';
import { filter, tap } from 'rxjs/operators';
import { createEffect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


//https://medium.com/better-programming/how-to-properly-add-google-analytics-tracking-to-your-angular-web-app-bc7750713c9e

declare let gtag: Function;

@Injectable()
export class GoogleAnalyticsEffects {
  constructor(private router: Router) { }

  pageView = createEffect(
    () => () =>
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
        tap((event: NavigationEnd) => {
          gtag('config', environment.analytics, {
            'page_path': event.urlAfterRedirects
          });
        })
      ),
    { dispatch: false }
  );
}