import { SharedModule } from './../../shared/shared.module';
import { FEATURE_NAME } from './state/index';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PathfinderContainerComponent } from './container/pathfinder-container.component';
import { PathfinderToolbarComponent } from './components/toolbar/pathfinder-toolbar.component';

//NgRx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './state/pathfinder.reducer';
import { PathfinderEffects } from './state/pathfinder.effects';

//https://github.com/qiao/PathFinding.js
//https://github.com/clementmihailescu/Pathfinding-Visualizer

const routes: Routes = [
  { path: '', component: PathfinderContainerComponent }
]

@NgModule({
  declarations: [
    PathfinderContainerComponent,
    PathfinderToolbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(FEATURE_NAME, reducer),
    EffectsModule.forFeature([PathfinderEffects])
  ]
})
export class PathfinderModule { }
