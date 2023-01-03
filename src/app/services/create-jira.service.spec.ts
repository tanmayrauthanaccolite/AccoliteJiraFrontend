import { TestBed } from '@angular/core/testing';

import { CreateJiraService } from './create-jira.service';

describe('CreateJiraService', () => {
  let service: CreateJiraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateJiraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
