import { LayoutNoFooterComponent } from './shared/layout-no-footer/layout-no-footer.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { HomePageComponent } from './feature/home/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { PageNotFoundComponent } from './shared/pages/page-not-found/page-not-found.component';
import { PathfinderModule } from './feature/pathfinder/pathfinder.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomePageComponent, pathMatch: 'full' },
    ]
  },
  {
    path: '',
    component: LayoutNoFooterComponent,
    children: [
      {
        path: 'pathfinder',
        loadChildren: () => import('./feature/pathfinder/pathfinder.module').then(m => PathfinderModule)
      }
    ]
  },
  {
    path: '**',
    component: LayoutComponent,
    children: [
      { path: '', component: PageNotFoundComponent }
    ]
  }
];

const configs: ExtraOptions = { enableTracing: true };

@NgModule({
  imports: [RouterModule.forRoot(routes, configs)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
