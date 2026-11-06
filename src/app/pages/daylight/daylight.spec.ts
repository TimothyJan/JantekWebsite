import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Daylight } from './daylight';

describe('Daylight', () => {
  let component: Daylight;
  let fixture: ComponentFixture<Daylight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Daylight],
    }).compileComponents();

    fixture = TestBed.createComponent(Daylight);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
