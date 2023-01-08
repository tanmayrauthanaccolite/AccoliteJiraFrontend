import { TestBed } from '@angular/core/testing';

import { EditJiraService } from './edit-jira.service';

describe('EditJiraService', () => {
  let service: EditJiraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditJiraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
