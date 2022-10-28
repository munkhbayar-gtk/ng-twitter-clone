import { Component } from '@angular/core';
import { ScreenMonitorService } from './services/screen-monitor.service';

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

  constructor(public sz : ScreenMonitorService) {
    //sz.setup();
    console.log('in-test');//, has(1, [1,2,3]));//[1,2,3].in(1))
  }
}
