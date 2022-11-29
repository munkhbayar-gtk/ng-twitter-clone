import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle-icon-button',
  templateUrl: './circle-icon-button.component.html',
  styleUrls: ['./circle-icon-button.component.scss']
})
export class CircleIconButtonComponent implements OnInit {

  @Input('svgIcon')
  svgIcon = 'message-outline';

  constructor() { }

  ngOnInit(): void {
  }

}
