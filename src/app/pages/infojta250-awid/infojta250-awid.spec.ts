import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Infojta250Awid } from './infojta250-awid';

describe('Infojta250Awid', () => {
  let component: Infojta250Awid;
  let fixture: ComponentFixture<Infojta250Awid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Infojta250Awid],
    }).compileComponents();

    fixture = TestBed.createComponent(Infojta250Awid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
