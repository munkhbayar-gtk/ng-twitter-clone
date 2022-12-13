import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTweetDialogComponent } from './new-tweet-dialog.component';

describe('NewTweetDialogComponent', () => {
  let component: NewTweetDialogComponent;
  let fixture: ComponentFixture<NewTweetDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTweetDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTweetDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
