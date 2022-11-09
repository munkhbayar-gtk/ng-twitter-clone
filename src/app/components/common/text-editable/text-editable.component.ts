import { Component, OnInit, ViewChild, HostListener, ElementRef, AfterViewInit, forwardRef } from '@angular/core';
import { UntypedFormControl, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-text-editable',
  templateUrl: './text-editable.component.html',
  styleUrls: ['./text-editable.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextEditableComponent),
    multi: true
  }]
})
export class TextEditableComponent implements OnInit, AfterViewInit,
  ControlValueAccessor {

  private _textValue = '';
  get textValue() : string {
    return this._textValue;
  }
  set textValue(vl : string) {
    if(vl === '<br>' || vl == '<BR>'){
      vl = '';
    }
    this._textValue = vl;
  }
  writeValue(obj: any): void {
    //this.textValue = obj;
  }
  registerOnChange(fn: any): void {
  }
  registerOnTouched(fn: any): void {
  }
  setDisabledState?(isDisabled: boolean): void {
    console.log('isDisabled', isDisabled);
  }

  onChange: (value: string) => void; // init by this.registerOnChange
  onTouched: () => void;

  @ViewChild('editor')
  editor : ElementRef<HTMLElement>;

  ngOnInit() {
  }

  ngAfterViewInit(){
  }

  onKeyDown(event : KeyboardEvent) {
    //console.log('event',event.key, event);
    if(event.ctrlKey) {
       if(!this.in(event.key, ['v','c','x','a','p', 'P','C','X','X','A'])) {
        event.preventDefault();
        event.stopPropagation();
        return;
       }
    }
  }

  private in(vl : any, values : any[]) : boolean {
    for(let val of values) {
      if(vl === val) return true;
    }
    return false;
  }
}
