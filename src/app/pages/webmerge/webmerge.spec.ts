import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Webmerge } from './webmerge';

describe('Webmerge', () => {
  let component: Webmerge;
  let fixture: ComponentFixture<Webmerge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Webmerge],
    }).compileComponents();

    fixture = TestBed.createComponent(Webmerge);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
