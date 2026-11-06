import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ftpmerge } from './ftpmerge';

describe('Ftpmerge', () => {
  let component: Ftpmerge;
  let fixture: ComponentFixture<Ftpmerge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ftpmerge],
    }).compileComponents();

    fixture = TestBed.createComponent(Ftpmerge);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
