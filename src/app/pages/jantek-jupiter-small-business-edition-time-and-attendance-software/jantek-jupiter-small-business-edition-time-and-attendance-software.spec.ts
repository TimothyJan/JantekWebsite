import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JantekJupiterSmallBusinessEditionTimeAndAttendanceSoftware } from './jantek-jupiter-small-business-edition-time-and-attendance-software';

describe('JantekJupiterSmallBusinessEditionTimeAndAttendanceSoftware', () => {
  let component: JantekJupiterSmallBusinessEditionTimeAndAttendanceSoftware;
  let fixture: ComponentFixture<JantekJupiterSmallBusinessEditionTimeAndAttendanceSoftware>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JantekJupiterSmallBusinessEditionTimeAndAttendanceSoftware],
    }).compileComponents();

    fixture = TestBed.createComponent(JantekJupiterSmallBusinessEditionTimeAndAttendanceSoftware);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
