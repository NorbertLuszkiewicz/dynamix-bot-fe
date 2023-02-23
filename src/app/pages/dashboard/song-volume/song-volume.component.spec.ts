import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongVolumeComponent } from './song-volume.component';

describe('SongVolumeComponent', () => {
  let component: SongVolumeComponent;
  let fixture: ComponentFixture<SongVolumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongVolumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongVolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
