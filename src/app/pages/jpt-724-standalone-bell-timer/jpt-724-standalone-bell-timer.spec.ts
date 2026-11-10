import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jpt724StandaloneBellTimer } from './jpt-724-standalone-bell-timer';

describe('Jpt724StandaloneBellTimer', () => {
  let component: Jpt724StandaloneBellTimer;
  let fixture: ComponentFixture<Jpt724StandaloneBellTimer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jpt724StandaloneBellTimer],
    }).compileComponents();

    fixture = TestBed.createComponent(Jpt724StandaloneBellTimer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
