import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tweet-action',
  templateUrl: './tweet-action.component.html',
  styleUrls: ['./tweet-action.component.scss']
})
export class TweetActionComponent implements OnInit {

  @Input('svgIcon')
  svgIcon = '';

  @Input('hoverColor')
  hoverColor = '';

  @Input('counter')
  counter: number = 12;

  @Input('active')
  active = false;

  constructor(private el : ElementRef<HTMLElement>) { }

  ngOnInit(): void {
    this.el.nativeElement.style.setProperty('--hoverColor', this.hoverColor);
    if(this.hoverColor.startsWith('#')){
      //covert into rgba
      const rgbaBgColor = this.hexToRgb(0.1);
      this.el.nativeElement.style.setProperty('--hoverBgColor', rgbaBgColor);
    }else{
      this.el.nativeElement.style.setProperty('--hoverBgColor', this.hoverColor);
    }
  }
  private hexToRgb(alpha: number | null) : string{
    const hex = this.hoverColor;
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);
        if(alpha) {
          return `rgba(${r}, ${g}, ${b}, ${alpha})`;
        }
        return `rgb(${r}, ${g}, ${b})`;
  }


  private static LOOKUP = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" }
  ]
  private static RX = /\.0+$|(\.[0-9]*[1-9])0+$/;
  format(num : number) : string {
    const item = TweetActionComponent.LOOKUP.reverse().find(item=>num >=item.value);
    if(item)
      return (num/item.value).toFixed(0).replace(TweetActionComponent.RX, '$1') + item.symbol;
    return '0';
  }
}
