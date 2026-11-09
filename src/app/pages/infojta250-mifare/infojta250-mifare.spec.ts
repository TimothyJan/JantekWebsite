import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Infojta250Mifare } from './infojta250-mifare';

describe('Infojta250Mifare', () => {
  let component: Infojta250Mifare;
  let fixture: ComponentFixture<Infojta250Mifare>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Infojta250Mifare],
    }).compileComponents();

    fixture = TestBed.createComponent(Infojta250Mifare);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
