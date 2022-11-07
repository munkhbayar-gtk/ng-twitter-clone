import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-item-expandable',
  templateUrl: './menu-item-expandable.component.html',
  styleUrls: ['./menu-item-expandable.component.scss']
})
export class MenuItemExpandableComponent implements OnInit {

  isOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(event: Event) {
    event.preventDefault();
    event.stopPropagation();
  }
}
