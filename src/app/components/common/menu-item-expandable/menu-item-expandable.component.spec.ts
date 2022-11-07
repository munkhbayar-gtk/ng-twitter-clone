import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemExpandableComponent } from './menu-item-expandable.component';

describe('MenuItemExpandableComponent', () => {
  let component: MenuItemExpandableComponent;
  let fixture: ComponentFixture<MenuItemExpandableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuItemExpandableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuItemExpandableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
