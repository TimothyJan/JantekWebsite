import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wirelesswebpunch } from './wirelesswebpunch';

describe('Wirelesswebpunch', () => {
  let component: Wirelesswebpunch;
  let fixture: ComponentFixture<Wirelesswebpunch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Wirelesswebpunch],
    }).compileComponents();

    fixture = TestBed.createComponent(Wirelesswebpunch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
