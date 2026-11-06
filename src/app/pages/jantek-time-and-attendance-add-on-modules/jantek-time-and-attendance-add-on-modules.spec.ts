import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JantekTimeAndAttendanceAddOnModules } from './jantek-time-and-attendance-add-on-modules';

describe('JantekTimeAndAttendanceAddOnModules', () => {
  let component: JantekTimeAndAttendanceAddOnModules;
  let fixture: ComponentFixture<JantekTimeAndAttendanceAddOnModules>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JantekTimeAndAttendanceAddOnModules],
    }).compileComponents();

    fixture = TestBed.createComponent(JantekTimeAndAttendanceAddOnModules);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
