import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,FormArray,Validators} from '@angular/forms';
import {LoginService} from '../../services/login.service';
import {SubcategoryService} from '../../services/subcategory.service';
import {UserService} from '../../services/user.service';
import {SkillService} from '../../services/skill.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-com-profile',
  templateUrl: './com-profile.component.html',
  styleUrls: ['./com-profile.component.css']
})
export class ComProfileComponent implements OnInit {
   profileForm:FormGroup;
   skillForm:FormGroup;
   subcategory:any;
  constructor(private router:Router,private service:LoginService,private formBuilder:FormBuilder,private subService:SubcategoryService,private uService:UserService,private sService:SkillService) { }

  ngOnInit() {
    this.createprofileForm();
    this.createskillForm();
    this.loadsubcategories();
    this.generateId();
  }
    createprofileForm()
    {
      this.profileForm=this.formBuilder.group({
        id:['',Validators.required],
        name:['',Validators.required],
        phone:['',Validators.required],
        email:['',Validators.required],
        location:['',Validators.required],
        picture:['',Validators.required]
      });
    }
    completeProfile(id,name,phone,email,location,picture)
    {
      this.uService.updateUserdetails(id,name,phone,email,location,picture).subscribe(res=>{
                 
      },err=>{

      });

    }
    createskillForm()
    {
      this.skillForm=this.formBuilder.group({
        skills:this.formBuilder.array([this.createskillFeild()],[Validators.minLength(1),Validators.maxLength(5)])
      });
    }
    addskillFeild()
    {
    (<FormArray>this.skillForm.get('skills')).push(this.createskillFeild());
    }
    createskillFeild():FormGroup
    {
      return this.formBuilder.group({
        skills:['',Validators.required]
      });
    }
    deleteSkill(id:number)
    {
      (<FormArray>this.skillForm.get('skills')).removeAt(id);
    }
    generateId()
    {
      const id=this.service.currentUserValue.id;
      this.loaduserData(id);
    }
    loaduserData(id)
    {
        this.uService.getUserDetails(id).subscribe(res=>{
          this.profileForm.setValue({
            id:res.user.id,
            name:res.user.Name,
            phone:res.user.Phone,
            email:res.user.Email,
            location:res.user.Location,
            picture:res.user.Picture
          });
        });
    }
    loadsubcategories()
    {
      this.subService.getSubcategory().subscribe(res=>{
        this.subcategory=res;
      },err=>{

      });
    }
    addingSkill()
    {
      let skillArr=this.skillForm.get('skills') as FormArray;
      let skillAr=skillArr.controls.map(skill=>skill.value);
      const id=this.service.currentUserValue.id;
      for(let i=0;i<skillAr.length;i++)
      {
          this.sService.addskills(id,skillAr[i].skills).subscribe(res=>{
            console.log('skill added');
          },err=>{

          });
      }
    }
    navigateHome()
    {
      this.router.navigate(['/panel']);
    }
}
