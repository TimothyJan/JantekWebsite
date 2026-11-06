import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaliforniaConsumerPrivacyAct } from './california-consumer-privacy-act';

describe('CaliforniaConsumerPrivacyAct', () => {
  let component: CaliforniaConsumerPrivacyAct;
  let fixture: ComponentFixture<CaliforniaConsumerPrivacyAct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaliforniaConsumerPrivacyAct],
    }).compileComponents();

    fixture = TestBed.createComponent(CaliforniaConsumerPrivacyAct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
