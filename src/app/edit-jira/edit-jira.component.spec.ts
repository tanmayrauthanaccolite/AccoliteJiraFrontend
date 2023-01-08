import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJiraComponent } from './edit-jira.component';

describe('EditJiraComponent', () => {
  let component: EditJiraComponent;
  let fixture: ComponentFixture<EditJiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditJiraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditJiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
