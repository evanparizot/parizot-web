import { AuthGuard } from './auth.guard';
import { CallbackComponent } from './shared/pages/callback/callback.component';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { PageNotFoundComponent } from './shared/pages/page-not-found/page-not-found.component';
import { ProfileComponent } from './feature/profile/profile.component';

const routes: Routes = [
  { path: 'callback', component: CallbackComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '', component: HomePageComponent, pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent },
];

const configs: ExtraOptions = { enableTracing: true };

@NgModule({
  imports: [RouterModule.forRoot(routes,configs)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
