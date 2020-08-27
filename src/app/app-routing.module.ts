import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomepageGuard} from './guard/homepage.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginModule )
  },
  {
    path: 'homepage',
    loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule),
    canActivate: [HomepageGuard],
    canLoad: [HomepageGuard]
  },
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', redirectTo: '/login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
