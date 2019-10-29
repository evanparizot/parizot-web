import { routeAnimations } from './animations/route.animations';
import { GoogleAnalyticsEffects } from './google-analytics/google-analytics.effects';
import { environment } from '../../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer
} from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { reducers, metaReducers } from './core.state';

export {
  routeAnimations,
};

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,

    //NgRx
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([
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
