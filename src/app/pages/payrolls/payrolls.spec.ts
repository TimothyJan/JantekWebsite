import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Payrolls } from './payrolls';

describe('Payrolls', () => {
  let component: Payrolls;
  let fixture: ComponentFixture<Payrolls>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Payrolls],
    }).compileComponents();

    fixture = TestBed.createComponent(Payrolls);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
