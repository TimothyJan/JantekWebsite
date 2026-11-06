import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JantekJupiterTimeAndAttendanceSystem } from './jantek-jupiter-time-and-attendance-system';

describe('JantekJupiterTimeAndAttendanceSystem', () => {
  let component: JantekJupiterTimeAndAttendanceSystem;
  let fixture: ComponentFixture<JantekJupiterTimeAndAttendanceSystem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JantekJupiterTimeAndAttendanceSystem],
    }).compileComponents();

    fixture = TestBed.createComponent(JantekJupiterTimeAndAttendanceSystem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
