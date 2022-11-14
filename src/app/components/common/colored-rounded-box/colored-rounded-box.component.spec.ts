import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoredRoundedBoxComponent } from './colored-rounded-box.component';

describe('ColoredRoundedBoxComponent', () => {
  let component: ColoredRoundedBoxComponent;
  let fixture: ComponentFixture<ColoredRoundedBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColoredRoundedBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColoredRoundedBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
