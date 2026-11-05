import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAnRma } from './request-an-rma';

describe('RequestAnRma', () => {
  let component: RequestAnRma;
  let fixture: ComponentFixture<RequestAnRma>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestAnRma],
    }).compileComponents();

    fixture = TestBed.createComponent(RequestAnRma);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
