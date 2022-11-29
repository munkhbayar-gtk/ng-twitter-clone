import { Component, Input, OnInit } from '@angular/core';
export interface UnCheckedState {
  bgClass: string,
  bg: string
}
@Component({
  selector: 'app-colored-circle-checkbox',
  templateUrl: './colored-circle-checkbox.component.html',
  styleUrls: ['./colored-circle-checkbox.component.scss']
})
export class ColoredCircleCheckboxComponent implements OnInit {

  @Input('unchecked-state')
  uncheckState : UnCheckedState = {
    bgClass: '0px solid white',
    bg: 'fill'
  };

  @Input('color')
  color: string = '';

  @Input('active')
  active = false;

  constructor() { }

  ngOnInit(): void {
  }

}
