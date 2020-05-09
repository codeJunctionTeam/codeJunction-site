/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { YoutubeService } from './youtube.service';

describe('Service: Youtube', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YoutubeService]
    });
  });

  it('should ...', inject([YoutubeService], (service: YoutubeService) => {
    expect(service).toBeTruthy();
  }));
});
