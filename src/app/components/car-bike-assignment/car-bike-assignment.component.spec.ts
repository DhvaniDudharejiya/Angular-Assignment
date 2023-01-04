import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarBikeAssignmentComponent } from './car-bike-assignment.component';

describe('CarBikeAssignmentComponent', () => {
  let component: CarBikeAssignmentComponent;
  let fixture: ComponentFixture<CarBikeAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarBikeAssignmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarBikeAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
