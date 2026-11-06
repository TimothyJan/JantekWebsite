import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Electriclock } from './electriclock';

describe('Electriclock', () => {
  let component: Electriclock;
  let fixture: ComponentFixture<Electriclock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Electriclock],
    }).compileComponents();

    fixture = TestBed.createComponent(Electriclock);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
