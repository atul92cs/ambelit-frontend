import { Component, OnInit } from '@angular/core';
import {SkillService} from '../../services/skill.service';
import {UserService} from '../../services/user.service';
import {LoginService} from '../../services/login.service';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';
import {ProfileModalComponent} from '../profile-modal/profile-modal.component';
import {SkillModalComponent} from '../skill-modal/skill-modal.component';
import {AddskillModalComponent} from '../addskill-modal/addskill-modal.component';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
   profile:any;
   skills:any;
   id:any;
  constructor( private sService:SkillService,private uService:UserService,private lService:LoginService,private dialog:MatDialog ) { }

  ngOnInit() {
    this.generateId();
  }
   generateId()
   {
     this.id=this.lService.currentUserValue.id;
     this.generateUser(this.id);
     this.generateSkills(this.id);
   }
   generateUser(id)
   {
     this.uService.getUserDetails(id).subscribe(res=>{
       this.profile=res;
     },err=>{});
   }
   generateSkills(id)
   {
     this.sService.getSkill(id).subscribe(res=>{
       this.skills=res;
       console.log(res);
     },err=>{});
   }
   editUser(id)
   {
     let matdialog=this.dialog.open(ProfileModalComponent,{
       width:'600px',
       data:id
     }).afterClosed().subscribe(res=>{
      this.generateId();
     },err=>{});
   }
   editSkill(id)
   {
     let matdialog=this.dialog.open(SkillModalComponent,{
       width:'600px',
       data:id
     }).afterClosed().subscribe(res=>{
       this.generateSkills(this.id);
     },err=>{});
   }
   addskill(id)
   {
     let matdialog=this.dialog.open(AddskillModalComponent,{
       width:'600px',
       data:id
     }).afterClosed().subscribe(res=>{
      this.generateSkills(this.id);
     },err=>{

     });
   }
   deleteuserSkill(id)
   {
     this.sService.deleteSkill(id).subscribe(res=>{
       this.generateSkills(this.id);
     },err=>{});
   }
}
