import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollInterfaces } from './payroll-interfaces';

describe('PayrollInterfaces', () => {
  let component: PayrollInterfaces;
  let fixture: ComponentFixture<PayrollInterfaces>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayrollInterfaces],
    }).compileComponents();

    fixture = TestBed.createComponent(PayrollInterfaces);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
