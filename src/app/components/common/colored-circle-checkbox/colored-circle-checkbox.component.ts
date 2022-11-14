import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-colored-circle-checkbox',
  templateUrl: './colored-circle-checkbox.component.html',
  styleUrls: ['./colored-circle-checkbox.component.scss']
})
export class ColoredCircleCheckboxComponent implements OnInit {

  @Input('color')
  color: string = '';

  @Input('active')
  active = false;

  constructor() { }

  ngOnInit(): void {
  }

}
