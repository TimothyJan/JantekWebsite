import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Webtimecards } from './webtimecards';

describe('Webtimecards', () => {
  let component: Webtimecards;
  let fixture: ComponentFixture<Webtimecards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Webtimecards],
    }).compileComponents();

    fixture = TestBed.createComponent(Webtimecards);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
