/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DoctorInsuranceService } from './doctor-insurance.service';

describe('DoctorInsuranceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoctorInsuranceService]
    });
  });

  it('should ...', inject([DoctorInsuranceService], (service: DoctorInsuranceService) => {
    expect(service).toBeTruthy();
  }));
});
