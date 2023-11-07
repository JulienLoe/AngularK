import { TestBed } from '@angular/core/testing';

import { ServiceFormService } from './service-form.service';

describe('ServiceFormService', () => {
  let service: ServiceFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
