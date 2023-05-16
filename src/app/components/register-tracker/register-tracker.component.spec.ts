import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTrackerComponent } from './register-tracker.component';

describe('RegisterTrackerComponent', () => {
  let component: RegisterTrackerComponent;
  let fixture: ComponentFixture<RegisterTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterTrackerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
