import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'pri-circle-btn',
  templateUrl: './primary-circle-button.component.html',
  styleUrls: ['./primary-circle-button.component.scss']
})
export class PrimaryCircleButtonComponent implements OnInit {

  @Input('svgIcon')
  svgIcon = 'twitter';

  @Input('disabled')
  disabled = false;

  @Input('size')
  size = 'small';

  constructor() { }

  ngOnInit(): void {
  }

  sizeClass(sz : string) : string {
    if(sz === 'small') return 'sm';
    if(sz === 'medium') return 'md';
    return 'lg';
  }
}
