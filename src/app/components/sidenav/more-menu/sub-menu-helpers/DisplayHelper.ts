import { SimpleChanges } from '@angular/core';
import { DisplayHelperDialogComponent } from './display-helper-dialog/display-helper-dialog.component';
import { MatDialog } from "@angular/material/dialog";

export class DisplayHelper {
  constructor(private dialog: MatDialog){

  }
  show() {
    // open
    console.log('theming dialog open');
    const dialogRef = this.dialog.open(DisplayHelperDialogComponent, {
      width: '600px',
      hasBackdrop: true,
      backdropClass: 'dimmed-background',
      panelClass: 'customer-dialog-container'
    });
  }

  get windowWidth() : number {
    return window.innerWidth;
  }



}
