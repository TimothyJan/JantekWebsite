import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Infojta250 } from './infojta250';

describe('Infojta250', () => {
  let component: Infojta250;
  let fixture: ComponentFixture<Infojta250>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Infojta250],
    }).compileComponents();

    fixture = TestBed.createComponent(Infojta250);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
