import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Webpunch } from './webpunch';

describe('Webpunch', () => {
  let component: Webpunch;
  let fixture: ComponentFixture<Webpunch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Webpunch],
    }).compileComponents();

    fixture = TestBed.createComponent(Webpunch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
