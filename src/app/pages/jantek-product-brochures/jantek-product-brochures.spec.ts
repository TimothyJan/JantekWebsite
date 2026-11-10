import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JantekProductBrochures } from './jantek-product-brochures';

describe('JantekProductBrochures', () => {
  let component: JantekProductBrochures;
  let fixture: ComponentFixture<JantekProductBrochures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JantekProductBrochures],
    }).compileComponents();

    fixture = TestBed.createComponent(JantekProductBrochures);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
