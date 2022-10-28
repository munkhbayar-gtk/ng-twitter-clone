import { Component, OnInit } from '@angular/core';
import { ScreenMonitorService } from 'src/app/services/screen-monitor.service';

@Component({
  selector: 'app-feeds-list',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss']
})
export class FeedsComponent implements OnInit {

  get width() : number{
    switch(this.sz.on) {
      case 'sm' : return 300;
      case 'md': return 400;
      default:
        return 600;
    }
  }

  constructor(public sz : ScreenMonitorService) { }

  ngOnInit(): void {
  }


}
