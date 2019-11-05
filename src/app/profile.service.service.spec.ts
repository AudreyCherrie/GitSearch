import { TestBed } from '@angular/core/testing';

import { Profile.ServiceService } from './profile.service.service';

describe('Profile.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Profile.ServiceService = TestBed.get(Profile.ServiceService);
    expect(service).toBeTruthy();
  });
});
