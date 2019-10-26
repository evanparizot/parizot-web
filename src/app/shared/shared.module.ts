import { DeferLoadDirective } from './directives/defer-load.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FooterComponent } from './components/footer/footer.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialElevationDirective } from './directives/material-elevation.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FontawesomeModule } from './fontawesome.module';

@NgModule({
  declarations: [
    FooterComponent,
    MaterialElevationDirective,
    DeferLoadDirective
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FontawesomeModule,
    FlexLayoutModule,
    FontAwesomeModule
  ],
  exports: [
    MaterialModule,
    FontawesomeModule,
    FlexLayoutModule,
    FooterComponent,
    DeferLoadDirective
  ]
})
export class SharedModule { }
