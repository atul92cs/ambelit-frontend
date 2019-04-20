import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,FormArray,Validators} from '@angular/forms';
import {LoginService} from '../../services/login.service';
import {SubcategoryService} from '../../services/subcategory.service';
import {UserService} from '../../services/user.service';
@Component({
  selector: 'app-com-profile',
  templateUrl: './com-profile.component.html',
  styleUrls: ['./com-profile.component.css']
})
export class ComProfileComponent implements OnInit {
   profileForm:FormGroup;
   skillForm:FormGroup;
   subcategory:any;
  constructor(private service:LoginService,private formBuilder:FormBuilder,private subService:SubcategoryService,private uService:UserService) { }

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
        skills:this.formBuilder.array([this.createskillFeild()])
      });
    }
    addskillFeild()
    {
    (<FormArray>this.skillForm.get('skills')).push(this.createskillFeild());
    }
    createskillFeild():FormGroup
    {
      return this.formBuilder.group({
        skill:['',Validators.required]
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
}
