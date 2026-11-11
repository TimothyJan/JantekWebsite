import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPolicyAndBipaPolicy } from './privacy-policy-and-bipa-policy';

describe('PrivacyPolicyAndBipaPolicy', () => {
  let component: PrivacyPolicyAndBipaPolicy;
  let fixture: ComponentFixture<PrivacyPolicyAndBipaPolicy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivacyPolicyAndBipaPolicy],
    }).compileComponents();

    fixture = TestBed.createComponent(PrivacyPolicyAndBipaPolicy);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
