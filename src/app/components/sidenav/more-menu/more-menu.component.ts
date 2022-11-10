import { SubMenuItem } from './../../common/menu-item-expandable/sub/sub-menu-item';
import { MenuItemExpandableComponent } from './../../common/menu-item-expandable/menu-item-expandable.component';
import { Component, Input, OnInit, ViewEncapsulation, Inject, ViewChild, QueryList } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-more-menu',
  templateUrl: './more-menu.component.html',
  styleUrls: ['./more-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MoreMenuComponentDialog implements OnInit {

  //@ViewChild(SubMenuItem)
  //subMenuItems : QueryList<SubMenuItem>;

  get windowHeight() : number{
    return window.innerHeight;
  }

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    const callback = this.data.onResize;
    const that = this;
    callback(function(pos: any[]){
      //[top, left, winchange] = pos;
      that.updatePosition(pos);
    });
  }


  close(tag : string) {
    this.dialogRef.close(tag);
  }

  private updatePosition(pos: any[]) {
    if(this.allMenuOpened){
      pos[0] = '0';
    }
    this.dialogRef.updatePosition({top: pos[0], left: pos[1]});
  }

  private allMenuOpened = false;
  onMenuStatChanged(menuItems: MenuItemExpandableComponent[]){
    const openedMenuItems = menuItems.filter(item => item.isOpen);
    this.allMenuOpened = openedMenuItems.length == menuItems.length;
  }
}
