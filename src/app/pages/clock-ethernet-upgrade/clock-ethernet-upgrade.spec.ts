import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockEthernetUpgrade } from './clock-ethernet-upgrade';

describe('ClockEthernetUpgrade', () => {
  let component: ClockEthernetUpgrade;
  let fixture: ComponentFixture<ClockEthernetUpgrade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClockEthernetUpgrade],
    }).compileComponents();

    fixture = TestBed.createComponent(ClockEthernetUpgrade);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
