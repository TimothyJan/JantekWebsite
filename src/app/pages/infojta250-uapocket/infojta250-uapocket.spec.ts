import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Infojta250Uapocket } from './infojta250-uapocket';

describe('Infojta250Uapocket', () => {
  let component: Infojta250Uapocket;
  let fixture: ComponentFixture<Infojta250Uapocket>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Infojta250Uapocket],
    }).compileComponents();

    fixture = TestBed.createComponent(Infojta250Uapocket);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
