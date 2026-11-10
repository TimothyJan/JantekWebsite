import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollBasedJournal } from './payroll-based-journal';

describe('PayrollBasedJournal', () => {
  let component: PayrollBasedJournal;
  let fixture: ComponentFixture<PayrollBasedJournal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayrollBasedJournal],
    }).compileComponents();

    fixture = TestBed.createComponent(PayrollBasedJournal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
