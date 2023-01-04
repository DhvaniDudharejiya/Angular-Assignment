import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchImgComponent } from './switch-img.component';

describe('SwitchImgComponent', () => {
  let component: SwitchImgComponent;
  let fixture: ComponentFixture<SwitchImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
