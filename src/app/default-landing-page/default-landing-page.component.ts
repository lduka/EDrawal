import {Component, Inject, OnInit, Pipe, PipeTransform} from '@angular/core';
import {EdrawalDataServiceService} from '../edrawal-data-service.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';

import {Observable, timer} from 'rxjs';

@Component({
  selector: 'app-default-landing-page',
  templateUrl: './default-landing-page.component.html',
  styleUrls: ['./default-landing-page.component.scss']
})
export class DefaultLandingPageComponent implements OnInit {
  constructor(private data: EdrawalDataServiceService, public dialog: MatDialog) { }
  step ;

  openDialog(): void {
    let  name: number;
    const source = timer(1000);
    const subscribe = source.subscribe(val => name );
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '250px',
      data: {name: source.subscribe(val => name = val ), animal : 'prince'},
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
   //   this.animal = result;
    });
  }

  ngOnInit() {
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  onSubmit(edrawalRequest: EdrawalRequest) {
    this.data.edrawalRequest(edrawalRequest);
  }
}



@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialogComponent implements OnInit {
  countDown;
  counter = 11;
  tick = 1000;
  ngOnInit() {

  }
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    dialogRef.disableClose = true;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
export interface DialogData {
  animal: string;
  name: string;
}
export interface  EdrawalRequest {
  voucherID: string;
  voucherPin: number;
  bankType: string;
  randAmount: string;
}

