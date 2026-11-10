import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JantekPcPunch } from './jantek-pc-punch';

describe('JantekPcPunch', () => {
  let component: JantekPcPunch;
  let fixture: ComponentFixture<JantekPcPunch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JantekPcPunch],
    }).compileComponents();

    fixture = TestBed.createComponent(JantekPcPunch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
