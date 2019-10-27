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
    data: {title: "About"},
    loadChildren: () => import('./features/about/about.module')
      .then(m => m.AboutModule)
  },
  {
    path: 'projects',
    data: {title: "Projects"},
    loadChildren: () => import('./features/projects/projects.module')
      .then(m => m.ProjectsModule)
  },
  {
    path: 'pathfinder',
    data: {title: "Pathfinder"},
    loadChildren: () => import('./features/pathfinder/pathfinder.module')
      .then(m => m.PathfinderModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

const configs: ExtraOptions = { 
  enableTracing: true, 
  scrollPositionRestoration: 'enabled',
  preloadingStrategy: PreloadAllModules
};

@NgModule({
  imports: [RouterModule.forRoot(routes, configs)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
