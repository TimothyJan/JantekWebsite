import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Webpaydata } from './webpaydata';

describe('Webpaydata', () => {
  let component: Webpaydata;
  let fixture: ComponentFixture<Webpaydata>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Webpaydata],
    }).compileComponents();

    fixture = TestBed.createComponent(Webpaydata);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
