import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Handkey } from './handkey';

describe('Handkey', () => {
  let component: Handkey;
  let fixture: ComponentFixture<Handkey>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Handkey],
    }).compileComponents();

    fixture = TestBed.createComponent(Handkey);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
