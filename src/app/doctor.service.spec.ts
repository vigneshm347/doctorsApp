/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DoctorService } from './doctor.service';

describe('DoctorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoctorService]
    });
  });

  it('should ...', inject([DoctorService], (service: DoctorService) => {
    expect(service).toBeTruthy();
  }));
});
