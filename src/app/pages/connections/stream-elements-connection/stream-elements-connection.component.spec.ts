import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamElementsConnectionComponent } from './stream-elements-connection.component';

describe('StreamElementsConnectionComponent', () => {
  let component: StreamElementsConnectionComponent;
  let fixture: ComponentFixture<StreamElementsConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamElementsConnectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamElementsConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
