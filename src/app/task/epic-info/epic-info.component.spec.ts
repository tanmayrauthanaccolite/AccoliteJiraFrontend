import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpicInfoComponent } from './epic-info.component';

describe('EpicInfoComponent', () => {
  let component: EpicInfoComponent;
  let fixture: ComponentFixture<EpicInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpicInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
