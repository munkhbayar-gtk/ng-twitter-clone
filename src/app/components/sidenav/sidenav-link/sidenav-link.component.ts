import { ScreenMonitorService } from 'src/app/services/screen-monitor.service';
import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
// disapear two <574
// shrink the height < 658
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
  icon : string = '';

  @Input('hoverEffect')
  hoverEffect = 'hoverAnimation';

  @Input('activeClass')
  activeClass = 'text-active';
  @Input('normalClass')
  normalClass = 'text';

  @Output('onSelected')
  onSelected = new EventEmitter<void>();
  constructor(public sz : ScreenMonitorService, public htmlElement: ElementRef<HTMLElement>) { }

  ngOnInit() {
  }

  get windowHeight() : number{
    return window.innerHeight;
  }
}
