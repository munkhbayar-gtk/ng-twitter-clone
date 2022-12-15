import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trend-item',
  templateUrl: './trend-item.component.html',
  styleUrls: ['./trend-item.component.scss']
})
export class TrendItemComponent implements OnInit {

  @Input('titles')
  titles : string[] ;

  constructor() { }

  ngOnInit(): void {
  }

}
