import { Component, OnInit } from '@angular/core';
import { ScreenMonitorService } from 'src/app/services/screen-monitor.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(public sz : ScreenMonitorService) { }

  ngOnInit() {
  }

}
