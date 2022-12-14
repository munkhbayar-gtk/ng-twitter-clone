import { RouterModule } from '@angular/router';
import { TweetComponent } from './../components/main/tweet/tweet/tweet.component';
//import { NewTweetDialogComponent } from './../components/sidenav/new-tweet-dialog/new-tweet-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PriCircleProgressComponent } from './../components/common/pri-circle-progress/pri-circle-progress.component';
import { MenuItemComponent } from './../components/common/menu-item/menu-item.component';
import { MatIconCustomModule } from './../mat-icon-custom.module';
import { MaterialModule } from './../material.module';
import { TweetComposerComponent } from './../components/main/tweet-composer/tweet-composer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryCircleButtonComponent } from '../components/common/primary-circle-button/primary-circle-button.component';
import { TextEditableComponent } from '../components/common/text-editable/text-editable.component';
import { TweetActionComponent } from '../components/main/tweet/tweet-action/tweet-action.component';
import { SearchBoxComponent } from '../components/common/search-box/search-box.component';

@NgModule({
  exports: [
    TweetComposerComponent,
    TweetComponent,
    TweetComposerComponent,
    SearchBoxComponent,
  ],
  declarations: [
    TweetActionComponent,
    TweetComponent,
    TweetComposerComponent,
    MenuItemComponent,
    PriCircleProgressComponent,
    PrimaryCircleButtonComponent,
    TextEditableComponent,
    SearchBoxComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule,
    MatIconCustomModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
