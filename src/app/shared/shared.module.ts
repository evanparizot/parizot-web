import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FooterComponent } from './components/footer/footer.component';
import { GithubRepoDisplayComponent } from './github/github-repo-display/github-repo-display.component';
import { GithubRepoContainerComponent } from './github/github-repo-container/github-repo-container.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialElevationDirective } from './directives/material-elevation.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FontawesomeModule } from './fontawesome.module';

@NgModule({
  declarations: [
    FooterComponent,
    GithubRepoDisplayComponent,
    GithubRepoContainerComponent,

    MaterialElevationDirective,
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
    GithubRepoDisplayComponent,
    GithubRepoContainerComponent,
  ]
})
export class SharedModule { }
