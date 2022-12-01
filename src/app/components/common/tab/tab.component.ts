import { Component, Input, OnInit, ViewChildren, QueryList } from '@angular/core';



@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  @Input('title')
  title = '';

  @Input('active')
  active = false;
  constructor() { }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'app-tabs',
  template: '',
})
export class TabsComponent implements OnInit{

  @ViewChildren(TabComponent)
  tabs: QueryList<TabComponent>;

  ngOnInit(): void {
  }
}
