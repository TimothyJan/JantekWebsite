import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Infojta250Securakey } from './infojta250-securakey';

describe('Infojta250Securakey', () => {
  let component: Infojta250Securakey;
  let fixture: ComponentFixture<Infojta250Securakey>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Infojta250Securakey],
    }).compileComponents();

    fixture = TestBed.createComponent(Infojta250Securakey);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
