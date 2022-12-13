import { Component, ComponentFactoryResolver,
  EventEmitter, Injectable, OnInit, Output, ViewChild, ViewContainerRef, ElementRef, Type } from '@angular/core';

export interface DialogRef{
  closed: EventEmitter<any>;
}
@Component({
  selector: 'app-anchor-dialog',
  templateUrl: './anchor-dialog.component.html',
  styleUrls: ['./anchor-dialog.component.scss']
})
export class AnchorDialogComponent implements OnInit {

  @ViewChild('dialogPanel')
  dialogPanel : ElementRef<HTMLElement>;

  @ViewChild('dialogComponent', {read: ViewContainerRef})
  entry : ViewContainerRef

  data : any;

  constructor(private dialogRef : AnchorDialog<any>) {
    dialogRef.open = this._openRef;
    dialogRef.close = this._closeRef;
  }

  ngOnInit(): void {
  }

  private _openRef = (config: any) =>{
    this.open(config);
  }
  private _closeRef = () => {
    this.dialogPanel.nativeElement.style.display='none';
  }

  open(config: any) : DialogRef{
    const ref : DialogRef = {
      closed: new EventEmitter<any>()
    }
    console.log('open-requested');
    this.dialogPanel.nativeElement.style.display='block';
    return ref;
  }

  open1(compType: Type<any>, config : any) {
    this.entry.clear();
    const compRef = this.entry.createComponent(compType);
    compRef.instance.data = this.data;
    this.dialogPanel.nativeElement.style.display='block';
  }
}

@Injectable({
  providedIn: 'root'
})
export class AnchorDialog <Result> {
  open = (config: any) => {};
  close = () => {};
}

