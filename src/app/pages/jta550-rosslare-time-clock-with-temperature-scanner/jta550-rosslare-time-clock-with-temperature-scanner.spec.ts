import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jta550RosslareTimeClockWithTemperatureScanner } from './jta550-rosslare-time-clock-with-temperature-scanner';

describe('Jta550RosslareTimeClockWithTemperatureScanner', () => {
  let component: Jta550RosslareTimeClockWithTemperatureScanner;
  let fixture: ComponentFixture<Jta550RosslareTimeClockWithTemperatureScanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jta550RosslareTimeClockWithTemperatureScanner],
    }).compileComponents();

    fixture = TestBed.createComponent(Jta550RosslareTimeClockWithTemperatureScanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
