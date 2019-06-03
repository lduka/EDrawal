import { TestBed } from '@angular/core/testing';

import { EdrawalDataServiceService } from './edrawal-data-service.service';

describe('EdrawalDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EdrawalDataServiceService = TestBed.get(EdrawalDataServiceService);
    expect(service).toBeTruthy();
  });
});
