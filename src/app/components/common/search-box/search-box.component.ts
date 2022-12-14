import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  value = '';

  @ViewChild('input')
  input: ElementRef<HTMLInputElement>;

  get focused() : boolean {
    return document.activeElement == this.input.nativeElement;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
