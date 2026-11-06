import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jobcosting } from './jobcosting';

describe('Jobcosting', () => {
  let component: Jobcosting;
  let fixture: ComponentFixture<Jobcosting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jobcosting],
    }).compileComponents();

    fixture = TestBed.createComponent(Jobcosting);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
