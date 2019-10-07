import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MaterialModule } from './modules/material.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GithubRepoDisplayComponent } from './github/github-repo-display/github-repo-display.component';
import { GithubRepoTileComponent } from './github/github-repo-tile/github-repo-tile.component';
import { GithubRepoContainerComponent } from './github/github-repo-container/github-repo-container.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    GithubRepoDisplayComponent,
    GithubRepoTileComponent,
    GithubRepoContainerComponent,
    PageNotFoundComponent,
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
