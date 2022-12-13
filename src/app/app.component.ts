import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ScreenMonitorService } from './services/screen-monitor.service';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ng-twitter-clone';

  fontSizeLevel : string = '0';

  constructor(public sz : ScreenMonitorService,
    public theme : ThemeService,
    private overlayContainer : OverlayContainer) {
    //sz.setup();
  }
  ngOnInit(): void {
   this.onThemeChange();
   this.theme.themeObserver.subscribe((theme)=>{
    this.onThemeChange();
   })
  }

  private onThemeChange() {
    const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
    const themeClassesToRemove = Array.from(overlayContainerClasses)
    .filter((item: string) => item.startsWith('thm-'));
    if (themeClassesToRemove.length) {
      overlayContainerClasses.remove(...themeClassesToRemove);
    }
    overlayContainerClasses.add(this.theme.currentThemeClass);
    overlayContainerClasses.add(this.theme.currentThemeName);
  }
  get windowWidth() : number {
    return window.innerWidth;
  }

  calc(w : number) : number{
    return 600 - (w > 688 ? 0 : (688 - w));
    //return (600 / 688) * w;
  }
}
