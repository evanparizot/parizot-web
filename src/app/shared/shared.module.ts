import { DeferLoadDirective } from './directives/defer-load.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FooterComponent } from './components/footer/footer.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialElevationDirective } from './directives/material-elevation.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FontawesomeModule } from './fontawesome.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ThemeSelectorComponent } from './components/theme-selector/theme-selector.component';

@NgModule({
  declarations: [
    FooterComponent,
    ThemeSelectorComponent,
    MaterialElevationDirective,
    DeferLoadDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FontawesomeModule,
    FlexLayoutModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    MaterialModule,
    FontawesomeModule,
    FlexLayoutModule,
    FooterComponent,
    ThemeSelectorComponent,
    DeferLoadDirective,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
