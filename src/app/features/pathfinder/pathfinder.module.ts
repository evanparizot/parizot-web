import { SharedModule } from './../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PathfinderContainerComponent } from './container/pathfinder-container.component';
import { PathfinderToolbarComponent } from './components/toolbar/pathfinder-toolbar.component';

//NgRx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PathfinderEffects } from './state/pathfinder.effects';
import { reducers, FEATURE_NAME } from './pathfinder.state';
import { NodeComponent } from './components/node/node.component';
import { OnNodeHoverDirective } from './directives/node-hover.directive';

//https://github.com/qiao/PathFinding.js
//https://github.com/clementmihailescu/Pathfinding-Visualizer

const routes: Routes = [
  { path: '', component: PathfinderContainerComponent }
]

@NgModule({
  declarations: [
    PathfinderContainerComponent,
    PathfinderToolbarComponent,
    OnNodeHoverDirective,
    NodeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(FEATURE_NAME, reducers),
    EffectsModule.forFeature([PathfinderEffects])
  ]
})
export class PathfinderModule { }
