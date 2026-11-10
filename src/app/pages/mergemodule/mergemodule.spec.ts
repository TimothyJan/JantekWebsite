import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mergemodule } from './mergemodule';

describe('Mergemodule', () => {
  let component: Mergemodule;
  let fixture: ComponentFixture<Mergemodule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mergemodule],
    }).compileComponents();

    fixture = TestBed.createComponent(Mergemodule);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
