import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCollectionTimeClocks } from './data-collection-time-clocks';

describe('DataCollectionTimeClocks', () => {
  let component: DataCollectionTimeClocks;
  let fixture: ComponentFixture<DataCollectionTimeClocks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataCollectionTimeClocks],
    }).compileComponents();

    fixture = TestBed.createComponent(DataCollectionTimeClocks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
