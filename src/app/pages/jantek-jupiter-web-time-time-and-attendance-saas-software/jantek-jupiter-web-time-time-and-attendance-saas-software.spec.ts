import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JantekJupiterWebTimeTimeAndAttendanceSaasSoftware } from './jantek-jupiter-web-time-time-and-attendance-saas-software';

describe('JantekJupiterWebTimeTimeAndAttendanceSaasSoftware', () => {
  let component: JantekJupiterWebTimeTimeAndAttendanceSaasSoftware;
  let fixture: ComponentFixture<JantekJupiterWebTimeTimeAndAttendanceSaasSoftware>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JantekJupiterWebTimeTimeAndAttendanceSaasSoftware],
    }).compileComponents();

    fixture = TestBed.createComponent(JantekJupiterWebTimeTimeAndAttendanceSaasSoftware);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
