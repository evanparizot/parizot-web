import { environment } from 'src/environments/environment';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/home/home.module')
      .then(m => m.HomeModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./features/about/about.module')
      .then(m => m.AboutModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('./features/projects/projects.module')
      .then(m => m.ProjectsModule)
  },
  {
    path: 'pathfinder',
    loadChildren: () => import('./features/pathfinder/pathfinder.module')
      .then(m => m.PathfinderModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

const configs: ExtraOptions = { 
  enableTracing: !environment.production, 
  scrollPositionRestoration: 'enabled',
  preloadingStrategy: PreloadAllModules
};

@NgModule({
  imports: [RouterModule.forRoot(routes, configs)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
