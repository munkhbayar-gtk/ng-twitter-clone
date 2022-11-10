import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayHelperDialogComponent } from './display-helper-dialog.component';

describe('DisplayHelperDialogComponent', () => {
  let component: DisplayHelperDialogComponent;
  let fixture: ComponentFixture<DisplayHelperDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayHelperDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayHelperDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
