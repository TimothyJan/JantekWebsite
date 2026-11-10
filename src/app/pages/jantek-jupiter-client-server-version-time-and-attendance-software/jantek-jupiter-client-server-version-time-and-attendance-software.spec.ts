import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JantekJupiterClientServerVersionTimeAndAttendanceSoftware } from './jantek-jupiter-client-server-version-time-and-attendance-software';

describe('JantekJupiterClientServerVersionTimeAndAttendanceSoftware', () => {
  let component: JantekJupiterClientServerVersionTimeAndAttendanceSoftware;
  let fixture: ComponentFixture<JantekJupiterClientServerVersionTimeAndAttendanceSoftware>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JantekJupiterClientServerVersionTimeAndAttendanceSoftware],
    }).compileComponents();

    fixture = TestBed.createComponent(JantekJupiterClientServerVersionTimeAndAttendanceSoftware);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
