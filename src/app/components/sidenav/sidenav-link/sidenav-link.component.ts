import { ScreenMonitorService } from 'src/app/services/screen-monitor.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav-link',
  templateUrl: './sidenav-link.component.html',
  styleUrls: ['./sidenav-link.component.scss']
})
export class SidenavLinkComponent implements OnInit {

  @Input('active')
  active : boolean = false;

  @Input('text')
  text: string = '';

  @Input('icon')
  icon : string = ''
  constructor(public sz : ScreenMonitorService) { }

  ngOnInit() {
  }

}
