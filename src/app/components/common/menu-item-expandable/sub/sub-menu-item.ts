import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sub-menu-item-expandable',
  templateUrl: './sub-menu-item.html',
  styleUrls: ['./sub-menu-item.scss']
})
export class SubMenuItem {

  @Input('text')
  text : string = '';
  @Input('svgIcon')
  svgIcon : string = '';
}
