import { Component, OnInit,Inject} from '@angular/core';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';
import {UserService} from '../../services/user.service';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.css']
})
export class ProfileModalComponent implements OnInit {
   updateProfile:FormGroup;
   id:any;
  constructor(public profileDialogRef:MatDialogRef<ProfileModalComponent>,@Inject(MAT_DIALOG_DATA) public data:string,private service:UserService,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.id=this.data;
    this.createForm();
    this.generateInfo(this.id);
  }
   createForm()
   {
     this.updateProfile=this.formBuilder.group({
       Name:['',Validators.required],
       Email:['',Validators.required],
       Phone:['',Validators.required],
       Location:['',Validators.required]
     });
   }
   generateInfo(id)
   {
     this.service.getUserDetails(id).subscribe(res=>{
       this.updateProfile.setValue({
         Name:res.user.Name,
         Email:res.user.Email,
         Phone:res.user.Phone,
         Location:res.user.Location
       });
     },err=>{});
   }
   updateUser(name,phone,location) {
      this.service.updateProfile(this.id,name,phone,location).subscribe(res=>{
        this.profileDialogRef.close();
      },err=>{
        this.profileDialogRef.close();
      });
   }
   cancelUpdate()
   {
     this.profileDialogRef.close();
   }
}
