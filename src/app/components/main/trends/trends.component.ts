import { Component, OnInit } from '@angular/core';
import { ApiTweetService } from 'src/app/services/api/api-tweet.service';

@Component({
  selector: 'app-trends-list',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.scss']
})
export class TrendsComponent implements OnInit {

  constructor(private apiService : ApiTweetService) { }

  ngOnInit(): void {
  }

  get trends() : string[][] {
    return this.apiService.listOfTrends();
  }
}
