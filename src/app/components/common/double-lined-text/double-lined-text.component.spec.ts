import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleLinedTextComponent } from './double-lined-text.component';

describe('DoubleLinedTextComponent', () => {
  let component: DoubleLinedTextComponent;
  let fixture: ComponentFixture<DoubleLinedTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleLinedTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoubleLinedTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
