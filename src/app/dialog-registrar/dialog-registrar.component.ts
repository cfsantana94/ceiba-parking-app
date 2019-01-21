import { Component, OnInit,Inject  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-registrar',
  templateUrl: './dialog-registrar.component.html',
  styleUrls: ['./dialog-registrar.component.css']
})
export class DialogRegistrarComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogRegistrarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  onClickPositiveResponse() {
    this.dialogRef.close();
  }

}
