import { Component, OnInit } from '@angular/core';
import {SkillService} from '../../services/skill.service';
import {UserService} from '../../services/user.service';
import {LoginService} from '../../services/login.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
   profile:any;
   skills:any;
  constructor( private sService:SkillService,private uService:UserService,private lService:LoginService ) { }

  ngOnInit() {
    this.generateId();
  }
   generateId()
   {
     const id=this.lService.currentUserValue.id;
     this.generateUser(id);
     this.generateSkills(id);
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
}
