import { ViewContainerRef, Component, Input, OnInit, ViewEncapsulation, Inject, ViewChild, QueryList, ElementRef } from '@angular/core';
import {MatDialogContainer, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-new-tweet-dialog',
  templateUrl: './new-tweet-dialog.component.html',
  styleUrls: ['./new-tweet-dialog.component.scss']
})
export class NewTweetDialogComponent implements OnInit {

  constructor(
    public el : ElementRef<HTMLElement>,
    private _vcRef : ViewContainerRef,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    const container = this._vcRef.element.nativeElement as HTMLElement;
    const dialogContainer = container.parentElement;
    dialogContainer?.classList.add('mat-dialog-container-custom');
  }

}
