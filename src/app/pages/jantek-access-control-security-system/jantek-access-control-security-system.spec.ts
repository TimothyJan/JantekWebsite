import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JantekAccessControlSecuritySystem } from './jantek-access-control-security-system';

describe('JantekAccessControlSecuritySystem', () => {
  let component: JantekAccessControlSecuritySystem;
  let fixture: ComponentFixture<JantekAccessControlSecuritySystem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JantekAccessControlSecuritySystem],
    }).compileComponents();

    fixture = TestBed.createComponent(JantekAccessControlSecuritySystem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
