import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Webreports } from './webreports';

describe('Webreports', () => {
  let component: Webreports;
  let fixture: ComponentFixture<Webreports>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Webreports],
    }).compileComponents();

    fixture = TestBed.createComponent(Webreports);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
