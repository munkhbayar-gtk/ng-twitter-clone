import { SidenavComponent } from './components/sidenav/sidenav/sidenav.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from './material.module';
import { SzDirective } from './directives/sz.directive';
import { SidenavLinkComponent } from './components/sidenav/sidenav-link/sidenav-link.component';
import { MatIconCustomModule } from './mat-icon-custom.module';
import { HttpClientModule } from '@angular/common/http';
import { TrendsComponent } from './components/main/trends/trends.component';
import { FeedsComponent } from './components/main/feeds/feeds.component';
import { TweetComposerComponent } from './components/main/tweet-composer/tweet-composer.component';
import { PrimaryCircleButtonComponent } from './components/common/primary-circle-button/primary-circle-button.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    SidenavLinkComponent,

    SzDirective,
      TrendsComponent,
      FeedsComponent,
      TweetComposerComponent,
      PrimaryCircleButtonComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatIconCustomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
