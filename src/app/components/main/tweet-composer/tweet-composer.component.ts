import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweet-composer',
  templateUrl: './tweet-composer.component.html',
  styleUrls: ['./tweet-composer.component.scss']
})
export class TweetComposerComponent implements OnInit {

  tweetText = "<span><i><strong>Hi Elon! how u doing?</strong></i></span>"
  constructor() { }

  ngOnInit(): void {
  }

}
