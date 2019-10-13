import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
  ],
  imports: [
    HomeModule,
    CommonModule
  ],
  exports: [
    HomeModule
  ]
})
export class FeatureModule { }
