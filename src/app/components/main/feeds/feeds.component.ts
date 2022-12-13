import { AnchorDialog } from './../../common/anchor-dialog/anchor-dialog.component';
import { Tweet } from './../../../data/data';
import { ApiTweetService } from './../../../services/api/api-tweet.service';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ScreenMonitorService } from 'src/app/services/screen-monitor.service';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-feeds-list',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss']
})
export class FeedsComponent implements OnInit, AfterViewInit {

  @ViewChild(MatMenuTrigger)
  profileMenuTrigger : MatMenuTrigger;



  private _tweets : Tweet[];
  get tweets() : Tweet[]{
    return this._tweets;
  }
  get width() : number{
    switch(this.sz.on) {
      case 'sm' : return 300;
      case 'md': return 400;
      default:
        return 600;
    }
  }

  constructor(
    public sz : ScreenMonitorService,
    private api : ApiTweetService,
    private dialog: AnchorDialog<any>
    ) { }
  ngAfterViewInit(): void {
    this.api.list().subscribe(data =>{
      this._tweets = data;
    })
  }

  ngOnInit(): void {
  }

  log(msg : any) {
    console.log('feed', msg);
  }


  openTooltipDialog(tweet : Tweet) {
    this.dialog.open({'data': {'title':'text-title'}});
  }
  closeTooltipDialog(tweet : Tweet) {
    this.dialog.close();
  }
}
