import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiotConnectionComponent } from './riot-connection.component';

describe('RiotConnectionComponent', () => {
  let component: RiotConnectionComponent;
  let fixture: ComponentFixture<RiotConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiotConnectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiotConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
