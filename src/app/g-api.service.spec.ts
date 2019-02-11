/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GApiService } from './g-api.service';

describe('GApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GApiService]
    });
  });

  it('should ...', inject([GApiService], (service: GApiService) => {
    expect(service).toBeTruthy();
  }));
});
