import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Infojta250Hid } from './infojta250-hid';

describe('Infojta250Hid', () => {
  let component: Infojta250Hid;
  let fixture: ComponentFixture<Infojta250Hid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Infojta250Hid],
    }).compileComponents();

    fixture = TestBed.createComponent(Infojta250Hid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
