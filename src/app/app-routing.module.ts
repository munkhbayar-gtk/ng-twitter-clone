import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedsComponent } from './components/main/feeds/feeds.component';
import { ProfileComponent } from './components/main/profile/profile.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./lazy-modules/feeds.module')
      .then(m => m.FeedsModule)
    },
  {
    path: '',
    loadChildren: () => import('./lazy-modules/feeds.module')
      .then(m => m.FeedsModule)
  },
  //{ path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule) },
  {
    path: '**',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
