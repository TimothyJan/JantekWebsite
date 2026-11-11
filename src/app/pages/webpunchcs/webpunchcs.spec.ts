import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Webpunchcs } from './webpunchcs';

describe('Webpunchcs', () => {
  let component: Webpunchcs;
  let fixture: ComponentFixture<Webpunchcs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Webpunchcs],
    }).compileComponents();

    fixture = TestBed.createComponent(Webpunchcs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
