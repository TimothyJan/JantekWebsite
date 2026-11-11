import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Timerecorder } from './timerecorder';

describe('Timerecorder', () => {
  let component: Timerecorder;
  let fixture: ComponentFixture<Timerecorder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Timerecorder],
    }).compileComponents();

    fixture = TestBed.createComponent(Timerecorder);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
