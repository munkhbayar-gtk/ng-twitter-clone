import { SidenavComponent } from './components/sidenav/sidenav/sidenav.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgsContenteditableModule } from '@ng-stack/contenteditable';

import { MaterialModule } from './material.module';
import { SzDirective } from './directives/sz.directive';
import { SidenavLinkComponent } from './components/sidenav/sidenav-link/sidenav-link.component';
import { MatIconCustomModule } from './mat-icon-custom.module';
import { HttpClientModule } from '@angular/common/http';
import { TrendsComponent } from './components/main/trends/trends.component';
import { FeedsComponent } from './components/main/feeds/feeds.component';
import { TweetComposerComponent } from './components/main/tweet-composer/tweet-composer.component';
import { PrimaryCircleButtonComponent } from './components/common/primary-circle-button/primary-circle-button.component';
import { PriCircleProgressComponent } from './components/common/pri-circle-progress/pri-circle-progress.component';
import { TextEditableComponent } from './components/common/text-editable/text-editable.component';
import { MenuItemComponent } from './components/common/menu-item/menu-item.component';
import { MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core';
import { MenuItemExpandableComponent } from './components/common/menu-item-expandable/menu-item-expandable.component';
import { TweetComponent } from './components/main/tweet/tweet/tweet.component';
import { TweetActionComponent } from './components/main/tweet/tweet-action/tweet-action.component';

const globalRippleConfig = {
  disabled: true
}

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    SidenavLinkComponent,

    SzDirective,
      TrendsComponent,
      FeedsComponent,
      TweetComposerComponent,
      PrimaryCircleButtonComponent,
      PriCircleProgressComponent,
      TextEditableComponent,
      MenuItemComponent,
      MenuItemExpandableComponent,
      TweetComponent,
      TweetActionComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgsContenteditableModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatIconCustomModule
  ],
  providers: [
    {provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
