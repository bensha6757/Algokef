import {Component, EventEmitter, Inject, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';

/**
 * @title Dialog with header, scrollable content and actions
 */
@Component({
  selector: 'dialog-content-example',
  templateUrl: 'dialog-content-example.html',
  styleUrls: ['./dialog-content-example-dialog.scss'],

})
export class DialogContentExample {
  @Output("event_card_created") public formGroupEventEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, { panelClass: 'custom-dialog-container' });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.formGroupEventEmitter.emit(result);
      }
    });
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {
  formGroup: FormGroup;

  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<DialogContentExampleDialog>,
              @Inject(MAT_DIALOG_DATA) public event: any) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      eventName: ['', Validators.required],
      date: [new Date(), Validators.required],
      time: ['', [Validators.required]],
      location: ['',  Validators.required]
    });
  }

  askSave() {
    this.dialogRef.close(this.formGroup.value);
  }
  close(){
    this.dialogRef.close();
  }

}
