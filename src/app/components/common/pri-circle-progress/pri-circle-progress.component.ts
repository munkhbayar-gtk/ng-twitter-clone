import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-pri-circle-progress',
  templateUrl: './pri-circle-progress.component.html',
  styleUrls: ['./pri-circle-progress.component.scss']
})
export class PriCircleProgressComponent implements OnInit {

  @Input('value')
  value = 0;

  @Input('svgIcon')
  svgIcon = '';

  @Input('hoverEffect')
  hoverEffect = true;

  @Input('tooltip')
  toolTip = ''

  constructor() { }

  ngOnInit() {
  }

}
