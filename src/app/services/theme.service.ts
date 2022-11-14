import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  /*
  currentTheme : string = 'thm-nolight-blue-0';

  get currentThemeName() : string {
    const items = this.currentTheme.split('-');
    return [items[0], items[1]].join('-');
  }
  */

  private themeMonitorSubject = new Subject<string>();
  themeObserver = this.themeMonitorSubject.asObservable();

  private currentTheme : string = 'thm-dim-blue-0';
  constructor() { }

  get currentThemeClass () : string {
    return this.currentTheme;
  }
  get currentThemeName() : string {
    const items = this.currentTheme.split('-');
    return [items[0], items[1]].join('-');
  }

  get currentThemeShortName() : string {
    const items = this.currentTheme.split('-');
    return items[1];
  }
  get currentTypographyIndex() : number {
    const items = this.currentTheme.split('-');
    const typo = items[items.length - 1];
    return parseInt(typo);
  }
  get currentColor() : string{
    //thm-nolight-deep-purple-0
    const items = this.currentTheme.split('-');
    const excludes = [0, 1, items.length - 1];
    return items.filter((el, index)=>!this.in(index, excludes)).join('-');
  }
  private in (vl : any , values: any[]) : boolean {
    for(let val of values){
      if(val === vl) return true;
    }
    return false;
  }
  get colors() : string[] {
    return ['blue', 'yellow', 'pink', 'deep-purple', 'deep-orange', 'teal'];
  }

  changeTypographyIndex(index : number) {
    const items = this.currentTheme.split('-');
    items[items.length - 1] = `${index}`;
    this.currentTheme = items.join('-');
    this.onChange();
  }
  changeColor(color: string) {
    const items = this.currentTheme.split('-');
    //items[2] = color;
    //this.currentTheme = items.join('-');
    const newThemeItems = [items[0], items[1], color, items[items.length - 1]];
    this.currentTheme = newThemeItems.join('-');
    this.onChange();
  }
  changeTheme(theme : string) {
    const items = this.currentTheme.split('-');
    items[1] = theme;
    this.currentTheme = items.join('-');
    this.onChange();
  }
  private onChange() {
    console.log('new-theme', this.currentTheme);
    this.themeMonitorSubject.next(this.currentTheme);
  }

  getThemeBy(theme : string, color: string, fz: number) : string {
    return `thm-${theme}-${color}-${fz}`;
  }

  list() : Theme[] {
    return [
      {
        name: 'default',
        title: 'Default'
      },
      {
        name: 'dim',
        title: 'Dim'
      },
      {
        name: 'nolight',
        title: 'Lights out'
      }
    ];
  }

}

interface Theme {
  name : string;
  title: string;
}
