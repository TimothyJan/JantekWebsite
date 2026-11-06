import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeAndAttendanceSoftware } from './time-and-attendance-software';

describe('TimeAndAttendanceSoftware', () => {
  let component: TimeAndAttendanceSoftware;
  let fixture: ComponentFixture<TimeAndAttendanceSoftware>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeAndAttendanceSoftware],
    }).compileComponents();

    fixture = TestBed.createComponent(TimeAndAttendanceSoftware);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
