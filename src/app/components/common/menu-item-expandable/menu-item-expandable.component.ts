import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item-expandable',
  templateUrl: './menu-item-expandable.component.html',
  styleUrls: ['./menu-item-expandable.component.scss']
})
export class MenuItemExpandableComponent implements OnInit {

  @Input('text')
  text : string = '';

  isOpen = false;

  constructor() { }

  ngOnInit(): void {
  }
  toggle() {
  }
  /*
  toggle(event: Event) {
    event.preventDefault();
    event.stopPropagation();
  }
  */
}



