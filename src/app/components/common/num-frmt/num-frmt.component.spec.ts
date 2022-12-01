import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumFrmtComponent } from './num-frmt.component';

describe('NumFrmtComponent', () => {
  let component: NumFrmtComponent;
  let fixture: ComponentFixture<NumFrmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumFrmtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumFrmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
