import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcbasedAccesscontrol } from './pcbased-accesscontrol';

describe('PcbasedAccesscontrol', () => {
  let component: PcbasedAccesscontrol;
  let fixture: ComponentFixture<PcbasedAccesscontrol>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PcbasedAccesscontrol],
    }).compileComponents();

    fixture = TestBed.createComponent(PcbasedAccesscontrol);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
