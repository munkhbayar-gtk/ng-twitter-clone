import { Twitter } from './../../data/data';
import { Observable, Subject } from 'rxjs';
import { Tweet } from 'src/app/data/data';
import { ApiTweetServiceEndpoint } from './api-tweet.service';
export class MemoryTweetDataEndpoint implements ApiTweetServiceEndpoint {
  private tweetId = 0;
  private listSubject = new Subject<Tweet[]>();
  private listSubjectObservable = this.listSubject.asObservable();
  list(): Observable<Tweet[]> {
    setTimeout(()=>{this.generateNewList();});
    return this.listSubjectObservable;
  }
  private generateNewList() {
    const ret : Tweet[] = [];
    const size = 50;
    for(let i = 0 ; i < size; i ++) {
      const tweet = this.generateNewTweet();
      ret.push(tweet);
    }
    this.listSubject.next(ret);
  }
  private generateNewTweet() : Tweet{
    const ret : Tweet= {
      id: this.newTweetId(),
      text: this.newText(),
      date: this.newDate(),
      type: 'tweet',
      retweet_id: 0,
      liked: true,
      retweet_count: 10,
      reply_count: 10,
      like_count: 23,
      twitter: this.newTwitter()
    };
    return ret;
  }

  private newTwitter() : Twitter{
    const ret : Twitter = {
      id: 0,
      name: "Elon Musk",
      uid: 'elon',
      img: ''
    }
    return ret;
  }
  private newDate()  : Date{
    return new Date();
  }
  private newTweetId() {
    return this.tweetId ++;
  }
  private newText() : string {
    return '';
  }
}
