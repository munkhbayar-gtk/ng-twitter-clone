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

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    SidenavLinkComponent,

    SzDirective
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
