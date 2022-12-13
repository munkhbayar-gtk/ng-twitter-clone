import { Component, OnInit, ViewEncapsulation, SimpleChanges } from '@angular/core';
import { UnCheckedState } from 'src/app/components/common/colored-circle-checkbox/colored-circle-checkbox.component';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-display-helper-dialog',
  templateUrl: './display-helper-dialog.component.html',
  styleUrls: ['./display-helper-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DisplayHelperDialogComponent implements OnInit {

  getUncheckState() {

  }
  constructor(public theme : ThemeService) { }

  ngOnInit(): void {
  }

  selectedFontSizeIndex = 0;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('dh-changes', changes);
  }

}
