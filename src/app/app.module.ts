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
//import { FeedsComponent } from './components/main/feeds/feeds.component';
//import { TweetComposerComponent } from './components/main/tweet-composer/tweet-composer.component';
//import { PrimaryCircleButtonComponent } from './components/common/primary-circle-button/primary-circle-button.component';
//import { PriCircleProgressComponent } from './components/common/pri-circle-progress/pri-circle-progress.component';
//import { TextEditableComponent } from './components/common/text-editable/text-editable.component';
//import { MenuItemComponent } from './components/common/menu-item/menu-item.component';
import { MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core';
import { MenuItemExpandableComponent } from './components/common/menu-item-expandable/menu-item-expandable.component';
//import { TweetComponent } from './components/main/tweet/tweet/tweet.component';
//import { TweetActionComponent } from './components/main/tweet/tweet-action/tweet-action.component';
import { MoreMenuComponentDialog } from './components/sidenav/more-menu/more-menu.component';
import { SubMenuItem } from './components/common/menu-item-expandable/sub/sub-menu-item';
import { DisplayHelperDialogComponent } from './components/sidenav/more-menu/sub-menu-helpers/display-helper-dialog/display-helper-dialog.component';
import { ColoredCircleCheckboxComponent } from './components/common/colored-circle-checkbox/colored-circle-checkbox.component';
import { ColoredCircleComponent } from './components/common/colored-circle/colored-circle.component';
import { ColoredRoundedBoxComponent } from './components/common/colored-rounded-box/colored-rounded-box.component';
import { ProfileComponent } from './components/main/profile/profile.component';
import { DoubleLinedTextComponent } from './components/common/double-lined-text/double-lined-text.component';
import { CircleIconButtonComponent } from './components/common/circle-icon-button/circle-icon-button.component';
import { TabComponent, TabsComponent } from './components/common/tab/tab.component';
import { InitDirective } from './directives/init.directive';
import { IconTextComponent } from './components/common/icon-text/icon-text.component';
import { NumFrmtComponent } from './components/common/num-frmt/num-frmt.component';
import { AnchorDialogComponent } from './components/common/anchor-dialog/anchor-dialog.component';
import { SharedModule } from './shared/shared.module';
import { NewTweetDialogComponent } from './components/sidenav/new-tweet-dialog/new-tweet-dialog.component';
//import { MainModule } from './main/main.module';

const globalRippleConfig = {
  disabled: true
}

@NgModule({
  declarations: [
    NewTweetDialogComponent,
    AppComponent,
    SidenavComponent,
    SidenavLinkComponent,

    SzDirective,
    InitDirective,
      TrendsComponent,
      //FeedsComponent,
      //TweetComposerComponent,
      //PrimaryCircleButtonComponent,
      //PriCircleProgressComponent,
      //TextEditableComponent,
      //MenuItemComponent,
      MenuItemExpandableComponent,
      SubMenuItem,
      //TweetComponent,
      //TweetActionComponent,
      MoreMenuComponentDialog,
      DisplayHelperDialogComponent,
      ColoredCircleCheckboxComponent,
      ColoredCircleComponent,
      ColoredRoundedBoxComponent,
      ProfileComponent,
      DoubleLinedTextComponent,
      CircleIconButtonComponent,
      TabComponent,
      TabsComponent,
      IconTextComponent,
      NumFrmtComponent,
      AnchorDialogComponent,
      //NewTweetDialogComponent,
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
    MatIconCustomModule,
    SharedModule,
    //MainModule
  ],
  providers: [
    {provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
