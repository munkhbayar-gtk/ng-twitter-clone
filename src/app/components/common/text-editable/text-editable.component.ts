import { Component, OnInit, forwardRef, HostListener, ElementRef, AfterViewInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-editable',
  templateUrl: './text-editable.component.html',
  styleUrls: ['./text-editable.component.scss']
})
export class TextEditableComponent implements OnInit {

  templateDrivenForm = 'This is contenteditable text for template-driven form';
  myControl = new FormControl();

  ngOnInit() {
    this.myControl.setValue(`This is contenteditable text for reactive form`);
  }
}
