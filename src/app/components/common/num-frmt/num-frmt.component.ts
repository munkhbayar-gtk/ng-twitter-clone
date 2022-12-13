import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-num-frmt',
  templateUrl: './num-frmt.component.html',
  styleUrls: ['./num-frmt.component.scss']
})
export class NumFrmtComponent implements OnInit {

  @Input('number')
  numValue = 0;

  @Input('text')
  text = '';
  constructor() { }

  ngOnInit(): void {
  }

  get formattedNumber ()  : string{
    return this.nFormat(this.numValue);
  }

  private nFormat(vl : number) : string {
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = this.LOOK_UP.slice().reverse().find(function(item) {
      return vl >= item.value;
    });
  return item ? (vl / item.value).toFixed(1).replace(rx, "$1") + item.symbol : "0";
  }
  private LOOK_UP = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" }
  ];
}
