import { SidenavLinkComponent } from './../sidenav-link/sidenav-link.component';
import { Component, ElementRef, HostListener, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { ScreenMonitorService } from 'src/app/services/screen-monitor.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @ViewChildren(SidenavLinkComponent)
  navItems : QueryList<SidenavLinkComponent>;

  selectedNavItem : SidenavLinkComponent | null;

  //windowHeight : number = window.innerHeight;
  get windowHeight() : number{
    return window.innerHeight;
  }
  @HostListener('window:resize', ['$event'])
  onWindowSize(evt: Event) {
    //this.windowHeight = window.innerHeight;
    console.log('onResize', this.windowHeight);
  }


  constructor(public sz : ScreenMonitorService, private renderer: Renderer2) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    const activeList = this.navItems.filter(nav => nav.active);
    this.selectedNavItem = activeList && activeList.length > 0 ? activeList[0] : null;
    console.log('nav-items', this.navItems.length);
    this.navItems.forEach(nav => {
        console.log('nav', nav.icon);
        this.renderer.listen(nav.htmlElement.nativeElement, 'click',
         ()=>{
            this.selectNavItem(nav);
          }
        )
    })
  }

  private selectNavItem(item : SidenavLinkComponent) {
    if(this.selectedNavItem) {
      this.selectedNavItem.active = false;
    }
    item.active = true;
    this.selectedNavItem = item;

  }
}
