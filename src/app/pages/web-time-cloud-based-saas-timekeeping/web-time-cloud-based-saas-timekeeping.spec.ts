import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebTimeCloudBasedSaasTimekeeping } from './web-time-cloud-based-saas-timekeeping';

describe('WebTimeCloudBasedSaasTimekeeping', () => {
  let component: WebTimeCloudBasedSaasTimekeeping;
  let fixture: ComponentFixture<WebTimeCloudBasedSaasTimekeeping>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebTimeCloudBasedSaasTimekeeping],
    }).compileComponents();

    fixture = TestBed.createComponent(WebTimeCloudBasedSaasTimekeeping);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
