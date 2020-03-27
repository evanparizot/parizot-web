import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { CertificationComponent } from './certification/certification.component';
import { AboutContainerComponent } from './about-container/about-container.component';
import { StoreModule } from '@ngrx/store';
import { FEATURE_NAME } from './about.state';
import { EffectsModule } from '@ngrx/effects';
import { AboutEffects } from './state/about.effects';
import { aboutReducer } from './state/about.reducers';

const routes: Routes = [
  {
    path: '',
    component: AboutContainerComponent
  }
]

@NgModule({
  declarations: [ExperienceComponent, EducationComponent, CertificationComponent, AboutContainerComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(FEATURE_NAME, aboutReducer),
    EffectsModule.forFeature([AboutEffects])
  ]
})
export class AboutModule { }
