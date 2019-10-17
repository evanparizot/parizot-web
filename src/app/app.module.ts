import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    // App stuff
    AppRoutingModule,
    // Angular stuff
    BrowserModule,
    BrowserAnimationsModule,
    // Core stuff
    SharedModule,
    CoreModule,
  ],
  providers: [],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }