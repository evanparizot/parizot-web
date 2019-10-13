import { PathfinderModule } from './pathfinder/pathfinder.module';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
  ],
  imports: [
    HomeModule,
    PathfinderModule,
    CommonModule
  ],
  exports: [
    HomeModule,
    PathfinderModule
  ]
})
export class FeatureModule { }
