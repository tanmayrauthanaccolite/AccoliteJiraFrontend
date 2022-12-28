import { TestBed } from '@angular/core/testing';

import { CreateIssueService } from './create-issue.service';

describe('CreateIssueService', () => {
  let service: CreateIssueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateIssueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
