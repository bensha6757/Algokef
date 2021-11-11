import {Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';

/**
 * @title Dialog with header, scrollable content and actions
 */
@Component({
  selector: 'dialog-content-example',
  templateUrl: 'dialog-content-example.html',
  styleUrls: ['./dialog-content-example-dialog.scss'],

})
export class DialogContentExample {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog,{ panelClass: 'custom-dialog-container' });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {
  formGroup: FormGroup;

  constructor(private fb: FormBuilder) { }
  
  ngOnInit() {
    this.formGroup = this.fb.group({
      eventName: ['', Validators.required],
      date: [new Date(), Validators.required],
      time: ['', [Validators.required]],
      location: ['',  Validators.required]
    });
  }

  askSave() {
    console.log('save plz');
    console.log(this.formGroup.value.eventName);
    console.log(this.formGroup.value.date.toLocaleDateString());
    console.log(this.formGroup.value.time);
    console.log(this.formGroup.value.location);

  }

}


/**  Copyright 2021 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */