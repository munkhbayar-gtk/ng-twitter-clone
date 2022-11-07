import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweet-composer',
  templateUrl: './tweet-composer.component.html',
  styleUrls: ['./tweet-composer.component.scss']
})
export class TweetComposerComponent implements OnInit {

  replySettingsMenuItems = [
    {
      title: 'Everyone can reply',
      svgIcon: 'globe',
      checked: true
    },
    {
      title: 'People you follow',
      svgIcon: 'ppl-follow',
      checked: false
    },
    {
      title: 'Only people you mention',
      svgIcon: 'email',
      checked: false
    },
  ];
  selectedReplySettingMenuItemIndex = this.replySettingsMenuItems.findIndex(item=>item.checked);
  repySettingMenuItemClicked(menu : any, index : number) {
    this.replySettingsMenuItems.forEach(item => item.checked = false);
    menu.checked = true;
    this.selectedReplySettingMenuItemIndex = index;
  }
  selectedMedias = [];
  constructor() { }

  ngOnInit(): void {
  }

  calcPercentage(num : number, max : number) : number {
    if(num < 5){
      num = 5;
    }
    return (num / max) * 100;
  }
}
