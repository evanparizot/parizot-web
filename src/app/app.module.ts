import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Core & Shared

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Core
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }