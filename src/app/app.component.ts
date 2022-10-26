import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-twitter-clone';

  fontSizeLevel : string = '0';

  currentTheme : string = 'thm-nolight-blue-0';

  get currentThemeName() : string {
    const items = this.currentTheme.split('-');
    return items[1];
  }
}
