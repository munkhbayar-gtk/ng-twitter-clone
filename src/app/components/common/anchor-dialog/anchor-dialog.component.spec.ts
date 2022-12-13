import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnchorDialogComponent } from './anchor-dialog.component';

describe('AnchorDialogComponent', () => {
  let component: AnchorDialogComponent;
  let fixture: ComponentFixture<AnchorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnchorDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnchorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
