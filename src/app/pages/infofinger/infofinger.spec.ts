import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Infofinger } from './infofinger';

describe('Infofinger', () => {
  let component: Infofinger;
  let fixture: ComponentFixture<Infofinger>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Infofinger],
    }).compileComponents();

    fixture = TestBed.createComponent(Infofinger);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
