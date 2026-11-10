import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JantekJupiterStandardVersionTimeAndAttendanceSoftware } from './jantek-jupiter-standard-version-time-and-attendance-software';

describe('JantekJupiterStandardVersionTimeAndAttendanceSoftware', () => {
  let component: JantekJupiterStandardVersionTimeAndAttendanceSoftware;
  let fixture: ComponentFixture<JantekJupiterStandardVersionTimeAndAttendanceSoftware>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JantekJupiterStandardVersionTimeAndAttendanceSoftware],
    }).compileComponents();

    fixture = TestBed.createComponent(JantekJupiterStandardVersionTimeAndAttendanceSoftware);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
