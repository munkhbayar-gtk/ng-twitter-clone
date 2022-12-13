import { NgModule } from '@angular/core';
import { FeedsComponent } from '../components/main/feeds/feeds.component';
import { RouterModule, Routes } from '@angular/router';
//import { TweetComponent } from '../components/main/tweet/tweet/tweet.component';
//import { TweetActionComponent } from '../components/main/tweet/tweet-action/tweet-action.component';
import { MaterialModule } from '../material.module';
import { MatIconCustomModule } from '../mat-icon-custom.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: FeedsComponent
  }
]
const globalRippleConfig = {
  disabled: true
}

@NgModule({
  declarations: [
    //TweetComponent,
    //TweetComposerComponent,
    //TweetActionComponent
    FeedsComponent
  ],

  imports: [
    RouterModule.forChild(routes),
    MaterialModule,
    MatIconCustomModule,
    CommonModule,
    SharedModule,
  ],
  exports: [RouterModule],
  /*
  declarations: [],
  imports: [],
  providers: [
    {provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig}
  ],
  */
})
export class FeedsModule { }
