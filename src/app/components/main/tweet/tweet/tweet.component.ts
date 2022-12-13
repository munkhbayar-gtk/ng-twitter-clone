import { Tweet } from './../../../../data/data';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent implements OnInit {

  @Input('tweet')
  tweet : Tweet;

  @Output('profile-over')
  overProfileEvent = new EventEmitter<void>();

  @Output('profile-out')
  outProfileEvent = new EventEmitter<void>();
  constructor() {
  }

  ngOnInit(): void {
  }
  replyClick() {

  }

  retweetClick() {

  }
  likeClick() {
    if(this.tweet.liked) {
      this.tweet.like_count --;
    }else{
      this.tweet.like_count ++;
    }

    this.tweet.liked = !this.tweet.liked;
  }
  shareClick() {

  }
}
