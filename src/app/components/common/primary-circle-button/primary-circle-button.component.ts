import { Component, OnInit,Input,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'pri-circle-btn',
  templateUrl: './primary-circle-button.component.html',
  styleUrls: ['./primary-circle-button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PrimaryCircleButtonComponent implements OnInit {

  @Input('svgIcon')
  svgIcon = 'twitter';

  @Input('disabled')
  disabled = false;

  @Input('size')
  size = 'small';

  @Input('tooltip')
  tooltip = ''

  constructor() { }

  ngOnInit(): void {
  }

  sizeClass(sz : string) : string {
    if(sz === 'small') return 'sm';
    if(sz === 'medium') return 'md';
    return 'lg';
  }
}
