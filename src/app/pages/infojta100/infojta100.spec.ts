import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Infojta100 } from './infojta100';

describe('Infojta100', () => {
  let component: Infojta100;
  let fixture: ComponentFixture<Infojta100>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Infojta100],
    }).compileComponents();

    fixture = TestBed.createComponent(Infojta100);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
