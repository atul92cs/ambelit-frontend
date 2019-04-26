import { Component, OnInit,Inject} from '@angular/core';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.css']
})
export class ProfileModalComponent implements OnInit {

  constructor(public profileDialogRef:MatDialogRef<ProfileModalComponent>,@Inject(MAT_DIALOG_DATA) public data:string) { }

  ngOnInit() {
  }

}
