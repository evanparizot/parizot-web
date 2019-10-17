import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,

    // StoreModule.forRoot(),
    // EffectsModule.forRoot([]),

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
