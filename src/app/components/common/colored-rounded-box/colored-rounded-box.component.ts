import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-colored-rounded-box',
  templateUrl: './colored-rounded-box.component.html',
  styleUrls: ['./colored-rounded-box.component.scss']
})
export class ColoredRoundedBoxComponent implements OnInit {

  @Input('active')
  active : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
