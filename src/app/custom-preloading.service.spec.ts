import { TestBed } from '@angular/core/testing';

import { CustomPreloadingService } from './custom-preloading.service';

describe('CustomPreloadingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomPreloadingService = TestBed.get(CustomPreloadingService);
    expect(service).toBeTruthy();
  });
});
