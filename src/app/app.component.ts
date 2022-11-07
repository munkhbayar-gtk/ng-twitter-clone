import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { ScreenMonitorService } from './services/screen-monitor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ng-twitter-clone';

  fontSizeLevel : string = '0';

  currentTheme : string = 'thm-nolight-blue-0';

  get currentThemeName() : string {
    const items = this.currentTheme.split('-');
    return [items[0], items[1]].join('-');
  }

  constructor(public sz : ScreenMonitorService,
    private overlayContainer : OverlayContainer) {
    //sz.setup();
  }
  ngOnInit(): void {
    const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
    const themeClassesToRemove = Array.from(overlayContainerClasses)
    .filter((item: string) => item.startsWith('thm-'));
    if (themeClassesToRemove.length) {
      overlayContainerClasses.remove(...themeClassesToRemove);
    }
    overlayContainerClasses.add(this.currentTheme);
    overlayContainerClasses.add(this.currentThemeName);
  }

  get windowWidth() : number {
    return window.innerWidth;
  }

  calc(w : number) : number{
    return 600 - (w > 688 ? 0 : (688 - w));
    //return (600 / 688) * w;
  }
}
