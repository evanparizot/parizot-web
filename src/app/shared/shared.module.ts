import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GithubRepoDisplayComponent } from './github/github-repo-display/github-repo-display.component';
import { GithubRepoContainerComponent } from './github/github-repo-container/github-repo-container.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MaterialElevationDirective } from './directives/material-elevation.directive';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    GithubRepoDisplayComponent,
    GithubRepoContainerComponent,
    PageNotFoundComponent,
    MaterialElevationDirective,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    HeaderComponent,
    FooterComponent,
    GithubRepoDisplayComponent,
    GithubRepoContainerComponent,
  ]
})
export class SharedModule { }
