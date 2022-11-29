import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-double-lined-text',
  templateUrl: './double-lined-text.component.html',
  styleUrls: ['./double-lined-text.component.scss']
})
export class DoubleLinedTextComponent implements OnInit {

  @Input('title')
  title: string

  @Input('sub-title')
  subTitle: string

  constructor() { }

  ngOnInit(): void {
  }

}
