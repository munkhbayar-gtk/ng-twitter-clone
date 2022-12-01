import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-num-frmt',
  templateUrl: './num-frmt.component.html',
  styleUrls: ['./num-frmt.component.scss']
})
export class NumFrmtComponent implements OnInit {

  @Input('number')
  numValue = '';

  @Input('text')
  text = '';
  constructor() { }

  ngOnInit(): void {
  }

  get formattedNumber ()  : string{
    return this.numValue;
  }

}
