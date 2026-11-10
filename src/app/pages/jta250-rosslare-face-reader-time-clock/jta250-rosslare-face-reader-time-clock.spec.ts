import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jta250RosslareFaceReaderTimeClock } from './jta250-rosslare-face-reader-time-clock';

describe('Jta250RosslareFaceReaderTimeClock', () => {
  let component: Jta250RosslareFaceReaderTimeClock;
  let fixture: ComponentFixture<Jta250RosslareFaceReaderTimeClock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jta250RosslareFaceReaderTimeClock],
    }).compileComponents();

    fixture = TestBed.createComponent(Jta250RosslareFaceReaderTimeClock);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
