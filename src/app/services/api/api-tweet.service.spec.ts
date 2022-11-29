import { TestBed } from '@angular/core/testing';

import { ApiTweetService } from './api-tweet.service';

describe('ApiTweetService', () => {
  let service: ApiTweetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTweetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
