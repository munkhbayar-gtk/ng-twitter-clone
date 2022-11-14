import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoredCircleCheckboxComponent } from './colored-circle-checkbox.component';

describe('ColoredCircleCheckboxComponent', () => {
  let component: ColoredCircleCheckboxComponent;
  let fixture: ComponentFixture<ColoredCircleCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColoredCircleCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColoredCircleCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
