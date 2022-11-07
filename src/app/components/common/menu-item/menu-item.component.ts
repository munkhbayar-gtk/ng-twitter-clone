import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input('iconBgColor')
  iconBgColor = '';


  @Input('title')
  title : string = 'Title';
  @Input('sub-title')
  subTitle : string;

  @Input('checked')
  checked = false;

  @Input('svgIcon')
  svgIcon = '';


  constructor() { }

  ngOnInit(): void {
  }

}
