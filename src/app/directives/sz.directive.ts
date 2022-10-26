import { NgClass } from '@angular/common';
import { Directive, DoCheck, ElementRef, IterableDiffers, KeyValueDiffers, OnInit, Renderer2 } from '@angular/core';
import { ScreenMonitorService } from '../services/screen-monitor.service';

@Directive({
  selector: '[classNames]'
})
export class SzDirective implements OnInit, DoCheck{

  ngClasses : string[] = [];
  private ngClass : any;
  constructor(
    private _iterableDiffers : IterableDiffers,
    private _keyValueDiffers : KeyValueDiffers,
    private el : ElementRef<HTMLElement>,
    private szm : ScreenMonitorService,
    private renderer : Renderer2) {

  }
  ngDoCheck(): void {
    try{
      this.ngClass.ngClass = this.ngClasses;
      this.ngClass.ngDoCheck();
    }catch (e){
      console.log(e, this.ngClasses);
    }

  }

  ngOnInit(): void {
    //console.log('sz inialized');
    this.ngClass = new NgClass(this._iterableDiffers,
      this._keyValueDiffers,
      this.el, this.renderer);

    this.szm.monitor.subscribe(() => {
      this.onChange();
    })
  }

  private onChange() {
    const classNames = this.el.nativeElement.getAttribute('classNames');
    if(!classNames) {
      this.ngClasses = [];
      return;
    }
    const clzzs = classNames.split(/\s+/g);
    const extractedClzzs : string[] = [];
    clzzs.forEach(clz=>{
        const idx = clz.indexOf(':');
        //console.log('splits', idx, clz);
        if(idx < 0) {
          this.parseClassToStyles(extractedClzzs, clz);
        }else{
          const splits = clz.split(':');
          const sz = splits[0];
          const eClz = splits[1];
          if(this.szm.activeQuery.name === sz) {
            this.parseClassToStyles(extractedClzzs, eClz);
          }else{
            //console.log('off-sz', clz);
          }
        }
    });
    //console.log('f-classes',extractedClzzs);
    this.ngClasses = extractedClzzs;
  }
  private parseClassToStyles(arr: any[], vl : any) {
    this.push(arr, vl);
  }
  private push(arr: any[], vl : any) {
    if(vl){
      arr.push(vl);
    }
  }
  private toggleClass(klass : string, enabled : true) {
    klass = klass.trim();
    if(klass) {
      klass.split(/\s+/g).forEach(klass=>{
        if(enabled){
          this.renderer.addClass(this.el.nativeElement, klass);
        }else{
          this.renderer.removeClass(this.el.nativeElement, klass);
        }
      });
    }
  }
}
