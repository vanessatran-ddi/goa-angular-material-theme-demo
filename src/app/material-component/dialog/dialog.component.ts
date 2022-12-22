import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-overview-example-dialog',
  template: `<h1 mat-dialog-title>Heading</h1>
<div mat-dialog-content>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia obcaecati id molestiae,
    natus dicta, eaque qui iusto similique, libero explicabo eligendi eius laboriosam!
    Repellendus ducimus officia asperiores. Eos, eius numquam.
  </p>
</div>
<mat-dialog-actions  align="end">
  <button mat-raised-button color="primary" [mat-dialog-close]="1" tabindex="2">Primary</button>
  <button mat-stroked-button color="primary" (click)="onNoClick()" tabindex="-1">Secondary</button>
</mat-dialog-actions>`
})
export class DialogOverviewExampleDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      maxHeight: '80%',
      width: 'var(--width,60ch)',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
