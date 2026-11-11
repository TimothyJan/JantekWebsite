import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Phonepunch } from './phonepunch';

describe('Phonepunch', () => {
  let component: Phonepunch;
  let fixture: ComponentFixture<Phonepunch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Phonepunch],
    }).compileComponents();

    fixture = TestBed.createComponent(Phonepunch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
