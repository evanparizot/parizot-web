import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MaterialModule } from './modules/material.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GithubRepoDisplayComponent } from './components/github-repo-display/github-repo-display.component';
import { GithubRepoTileComponent } from './components/github-repo-tile/github-repo-tile.component';
import { GithubRepoContainerComponent } from './components/github-repo-container/github-repo-container.component';
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    GithubRepoDisplayComponent,
    GithubRepoTileComponent,
    GithubRepoContainerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
