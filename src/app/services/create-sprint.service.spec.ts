import { TestBed } from '@angular/core/testing';

import { CreateSprintService } from './create-sprint.service';

describe('CreateSprintService', () => {
  let service: CreateSprintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateSprintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
