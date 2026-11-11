import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnOnInvestment } from './return-on-investment';

describe('ReturnOnInvestment', () => {
  let component: ReturnOnInvestment;
  let fixture: ComponentFixture<ReturnOnInvestment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReturnOnInvestment],
    }).compileComponents();

    fixture = TestBed.createComponent(ReturnOnInvestment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
