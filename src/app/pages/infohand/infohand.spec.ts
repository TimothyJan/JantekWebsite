import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Infohand } from './infohand';

describe('Infohand', () => {
  let component: Infohand;
  let fixture: ComponentFixture<Infohand>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Infohand],
    }).compileComponents();

    fixture = TestBed.createComponent(Infohand);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
