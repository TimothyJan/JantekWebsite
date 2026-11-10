import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NjPaidSickLeaveActForNewJerseyCustomers } from './nj-paid-sick-leave-act-for-new-jersey-customers';

describe('NjPaidSickLeaveActForNewJerseyCustomers', () => {
  let component: NjPaidSickLeaveActForNewJerseyCustomers;
  let fixture: ComponentFixture<NjPaidSickLeaveActForNewJerseyCustomers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NjPaidSickLeaveActForNewJerseyCustomers],
    }).compileComponents();

    fixture = TestBed.createComponent(NjPaidSickLeaveActForNewJerseyCustomers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
