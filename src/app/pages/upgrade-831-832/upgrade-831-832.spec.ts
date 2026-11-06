import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Upgrade831832 } from './upgrade-831-832';

describe('Upgrade831832', () => {
  let component: Upgrade831832;
  let fixture: ComponentFixture<Upgrade831832>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Upgrade831832],
    }).compileComponents();

    fixture = TestBed.createComponent(Upgrade831832);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
