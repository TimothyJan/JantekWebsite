import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jta250HidTimeClock } from './jta250-hid-time-clock';

describe('Jta250HidTimeClock', () => {
  let component: Jta250HidTimeClock;
  let fixture: ComponentFixture<Jta250HidTimeClock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jta250HidTimeClock],
    }).compileComponents();

    fixture = TestBed.createComponent(Jta250HidTimeClock);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
