import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryCircleButtonComponent } from './primary-circle-button.component';

describe('PrimaryCircleButtonComponent', () => {
  let component: PrimaryCircleButtonComponent;
  let fixture: ComponentFixture<PrimaryCircleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryCircleButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryCircleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
