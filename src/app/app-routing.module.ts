import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomepageGuard} from './guard/homepage.guard';

const routes: Routes = [
  {
    path: 'homepage',
    loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule),
    canActivate: [HomepageGuard],
    canLoad: [HomepageGuard]
  },
  {path: '', redirectTo: '/homepage', pathMatch: 'full'},
  {path: '**', redirectTo: '/homepage'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
