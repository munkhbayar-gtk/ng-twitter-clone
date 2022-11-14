import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-colored-circle',
  templateUrl: './colored-circle.component.html',
  styleUrls: ['./colored-circle.component.scss']
})
export class ColoredCircleComponent implements OnInit {

  @Input('active')
  active = false;

  constructor() { }

  ngOnInit(): void {
  }

}
