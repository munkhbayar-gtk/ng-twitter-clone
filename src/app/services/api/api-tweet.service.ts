import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tweet } from '../../data/data';
import { MemoryTweetDataEndpoint } from './memory-data-endpoint';

@Injectable({
  providedIn: 'root'
})
export class ApiTweetService implements ApiTweetServiceEndpoint{

  private endpoint : ApiTweetServiceEndpoint = new MemoryTweetDataEndpoint();

  constructor() { }

  list() : Observable<Tweet[]>{
    return this.endpoint.list();
  }

  listOfTrends() : string[][]{
    return this.endpoint.listOfTrends();
  }
}

export interface ApiTweetServiceEndpoint {
  listOfTrends(): string[][];
  list() : Observable<Tweet[]>;
}
