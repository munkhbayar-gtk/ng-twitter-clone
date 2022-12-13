import { ThemeService } from 'src/app/services/theme.service';
import { SidenavLinkComponent } from './../sidenav-link/sidenav-link.component';
import { Component, ElementRef, HostListener, OnInit, QueryList, Renderer2,
  SimpleChanges, ViewChildren } from '@angular/core';
import { ScreenMonitorService } from 'src/app/services/screen-monitor.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MoreMenuComponentDialog } from '../more-menu/more-menu.component';
import { DisplayHelper } from '../more-menu/sub-menu-helpers/DisplayHelper';
import { TweetComposerComponent } from '../../main/tweet-composer/tweet-composer.component';
import { NewTweetDialogComponent } from '../new-tweet-dialog/new-tweet-dialog.component';


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
    console.log('onResize', this.windowHeight, this.onWindowResized);
    if(this.onWindowResized) {
      this.onWindowResized();
    }
  }


  constructor(
    public theme: ThemeService,
    public sz : ScreenMonitorService,
    private renderer: Renderer2,
    private dialog: MatDialog) { }

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

  ngOnChanges(changes: SimpleChanges){
    console.log('changes', changes);
  }
  private onWindowResized: any;

  private updateDialogPosition(el: HTMLElement, topChangeHeight : number) {
    const rect =  el.getBoundingClientRect();
    const top = this.windowHeight < topChangeHeight ? '0': `${rect.bottom - 230}px`;
    const left = rect.left;//(rect.left + rect.width/2) - dialogWidth / 2;
    //dialogRef.updatePosition({top: top, left: `${left}px`});
    return [top, left, topChangeHeight];
  }
  moreClicked(event : Event, topChangeHeight : number, moreNavItem : SidenavLinkComponent) {
    const dialogWidth = 320;
    const rect = moreNavItem.htmlElement.nativeElement.getBoundingClientRect();
    const top = this.windowHeight < topChangeHeight ? '0': `${rect.bottom - 230}px`;
    const left = rect.left;//(rect.left + rect.width/2) - dialogWidth / 2;

    const that = this;

    const dialogRef = this.dialog.open(MoreMenuComponentDialog, {
      width: `${dialogWidth}px`,
      data: {
        topChangeHeight: topChangeHeight,
        onResize: function(onResizeCallback: any){
          that.onWindowResized = function() {
            const pos = this.updateDialogPosition(moreNavItem.htmlElement.nativeElement, topChangeHeight);
            onResizeCallback(pos);
          };
        }
      },
      position: {
        top: top,
        left: `${left}px`
      },
      panelClass: 'no-space'
    });
    dialogRef.afterClosed().subscribe((resultTag)=>{
      this.onWindowResized = null;
      console.log('dialog-closed-with', resultTag);
      this.onMoreSubMenuItemSelected(resultTag);
    })
    /*
    setTimeout(()=>{
      dialogRef.updatePosition({top:'0', left: `${left}px`});
    }, 5000);
    */
  }

  private onMoreSubMenuItemSelected(menuTag: string) {
    const action = this.moreSubMenuItemsActions[menuTag];
    if(action){
      action();
    }else{
      console.log('no-action', menuTag);
    }
  }

  private onDisplayMenuClicked = ()=>{
    const helper = new DisplayHelper(this.dialog);
    helper.show();
  }

  private moreSubMenuItemsActions : MoreSubMenuActionType = {
    "display": this.onDisplayMenuClicked
  }

  openNewTweetDialog() {
    console.log('new dialog requested');
    const dialogRef = this.dialog.open(NewTweetDialogComponent,
      {
        width: `600px`,
        position: {
          top: `20px`
        },
        //panelClass: 'mat-container',
        backdropClass: 'dimmed-background',
        panelClass: 'customer-dialog-container',
      });
      dialogRef.afterClosed().subscribe(result=>{

      });
    /*
    const dialogRef = this.dialog.open(TweetComposerComponent, {
      width: `${dialogWidth}px`,
      data: {
        topChangeHeight: topChangeHeight,
        onResize: function(onResizeCallback: any){
          that.onWindowResized = function() {
            const pos = this.updateDialogPosition(moreNavItem.htmlElement.nativeElement, topChangeHeight);
            onResizeCallback(pos);
          };
        }
      }
      ,
      position: {
        top: top,
        left: `${left}px`
      },
      panelClass: 'no-space'
      */
  }
}
type MoreSubMenuActionType={
  [key: string] : any
}

