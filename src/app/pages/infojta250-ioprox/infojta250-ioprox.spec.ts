import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Infojta250Ioprox } from './infojta250-ioprox';

describe('Infojta250Ioprox', () => {
  let component: Infojta250Ioprox;
  let fixture: ComponentFixture<Infojta250Ioprox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Infojta250Ioprox],
    }).compileComponents();

    fixture = TestBed.createComponent(Infojta250Ioprox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
