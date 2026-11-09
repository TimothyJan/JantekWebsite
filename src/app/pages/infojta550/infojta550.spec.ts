import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Infojta550 } from './infojta550';

describe('Infojta550', () => {
  let component: Infojta550;
  let fixture: ComponentFixture<Infojta550>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Infojta550],
    }).compileComponents();

    fixture = TestBed.createComponent(Infojta550);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
