import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedsComponent } from './components/main/feeds/feeds.component';
import { ProfileComponent } from './components/main/profile/profile.component';

const routes: Routes = [
  {
    path:'home',
    component: FeedsComponent
  },
  {
    path: '',
    component: FeedsComponent
  },
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
