import { TestBed } from '@angular/core/testing';

import { UpgradeServiceService } from './upgrade-service.service';

describe('UpgradeServiceService', () => {
  let service: UpgradeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpgradeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
