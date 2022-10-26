import { Injectable, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { delay, filter } from 'rxjs/operators';
import { Subject } from 'rxjs';
//import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

/*
module.exports = {
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }
  }
}
*/
/* min-width: ?px */
/*
export enum SZ {
  xsm = 0,
  sm = 640,
  md = 768,
  lg = 1024,
  xl = 1280,
  xxl = 1536
}
*/
export interface MediaQuery {
  name:string,
  query: string,
  active: boolean
}
@Injectable({
  providedIn: 'root'
})
export class ScreenMonitorService{
  private mediaQueries : any = {
    sm : `(max-width: 767px)`,
    md : `(min-width: 768px) and (max-width: 1023px)`,
    lg : `(min-width: 1024px) and (max-width: 1279px)`,
    xl : `(min-width: 1280px) and (max-width: 1535px)`,
    xxl : `(min-width: 1536px)`
  }

  private STATES : any= {};

  get on() : string {
    const mq = this.activeQuery;
    return mq.name;
  }
  get activeQuery() : MediaQuery{
    const keys = Object.keys(this.mediaQueries);
    const activeKey : string = Object.keys(this.STATES).find(key=>this.STATES[key]) as string;
    const query = this.mediaQueries[activeKey]
    return {
      name: activeKey,
      query: query,
      active: true
    }
  }
  monitor = new Subject<void>();

  constructor(private observer : BreakpointObserver) {
    this.setup();
  }
  private setup(): void {

    const minSizes : string[] = Object.values(this.mediaQueries);//this.sizes.map(size => size);
    this.observer
      .observe(minSizes)
      .pipe(delay(1))
      .subscribe((res)=>{
        this.onBreadpoint(res.breakpoints, minSizes);
        this.monitor.next();
    });
    console.log('observing ... ');
  }

  private onBreadpoint(br: any, sizes: string[]) {
    const keys = Object.keys(this.mediaQueries);
    sizes.forEach((value, index)=>{
      const matches = br[value];
      const sz = this.mediaQueries
      const key = keys[index];
      this.STATES[key] = matches;
      //this.STATES[index] = matches;
    })
  }
}
