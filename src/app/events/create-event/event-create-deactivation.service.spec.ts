import { TestBed } from '@angular/core/testing';

import { EventCreateDeactivationService } from './event-create-deactivation.service';

describe('EventCreateDeactivationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventCreateDeactivationService = TestBed.get(EventCreateDeactivationService);
    expect(service).toBeTruthy();
  });
});
