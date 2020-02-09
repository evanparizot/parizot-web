import { routeAnimations } from './animations/route.animations';
import { GoogleAnalyticsEffects } from './google-analytics/google-analytics.effects';
import { environment } from '../../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import {
  StoreRouterConnectingModule,
} from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { reducers, metaReducers } from './core.state';
import { SettingsEffects } from './state/settings/settings.effects';
import { CustomSerializer } from './state/router/router.serializer';

export {
  routeAnimations,
};

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,

    //NgRx
    StoreModule.forRoot(reducers, { metaReducers, initialState: {
      router: {
        "state": {
          "url": "/",
          "params": {},
          "queryParams": {},
          "data": {}
        },
        "navigationId": 0
      }
    } }),
    StoreRouterConnectingModule.forRoot({
      // stateKey: 'router',
      serializer: CustomSerializer
    }),
    EffectsModule.forRoot([
      SettingsEffects,
      GoogleAnalyticsEffects
    ]),
    environment.production ? [] : StoreDevtoolsModule.instrument({name: 'Main site'})
  ],
  declarations: [],
  providers: []
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule already loaded.');
    }
  }
}
