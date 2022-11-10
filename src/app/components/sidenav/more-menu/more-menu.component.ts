import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-more-menu',
  templateUrl: './more-menu.component.html',
  styleUrls: ['./more-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MoreMenuComponentDialog implements OnInit {

  get windowHeight() : number{
    return window.innerHeight;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
