import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PathfinderContainerComponent } from './pathfinder-container/pathfinder-container.component';
import { PathfinderToolbarComponent } from './pathfinder-toolbar/pathfinder-toolbar.component';


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
    RouterModule.forChild(routes)
  ]
})
export class PathfinderModule { }
