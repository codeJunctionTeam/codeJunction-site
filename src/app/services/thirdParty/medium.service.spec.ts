/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MediumService } from './medium.service';

describe('Service: Medium', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MediumService]
    });
  });

  it('should ...', inject([MediumService], (service: MediumService) => {
    expect(service).toBeTruthy();
  }));
});
