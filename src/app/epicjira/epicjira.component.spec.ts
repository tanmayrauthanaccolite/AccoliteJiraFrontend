import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpicjiraComponent } from './epicjira.component';

describe('EpicjiraComponent', () => {
  let component: EpicjiraComponent;
  let fixture: ComponentFixture<EpicjiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpicjiraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpicjiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
