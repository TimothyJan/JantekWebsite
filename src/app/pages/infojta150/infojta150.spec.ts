import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Infojta150 } from './infojta150';

describe('Infojta150', () => {
  let component: Infojta150;
  let fixture: ComponentFixture<Infojta150>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Infojta150],
    }).compileComponents();

    fixture = TestBed.createComponent(Infojta150);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
