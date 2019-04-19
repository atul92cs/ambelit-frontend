import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,FormArray,Validators} from '@angular/forms';
import {LoginService} from '../../services/login.service';
import {SubcategoryService} from '../../services/subcategory.service';
@Component({
  selector: 'app-com-profile',
  templateUrl: './com-profile.component.html',
  styleUrls: ['./com-profile.component.css']
})
export class ComProfileComponent implements OnInit {
   profileForm:FormGroup;
   skillForm:FormGroup;
   subcategory:any;
  constructor(private service:LoginService,private formBuilder:FormBuilder,private subService:SubcategoryService) { }

  ngOnInit() {
    this.createprofileForm();
    this.createskillForm();
    this.loadsubcategories();
  }
    createprofileForm()
    {
      this.profileForm=this.formBuilder.group({
        name:['',Validators.required],
        phone:['',Validators.required],
        email:['',Validators.required],
        location:['',Validators.required],
        picture:['',Validators.required]
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
    loaduserData()
    {

    }
    loadsubcategories()
    {
      this.subService.getSubcategory().subscribe(res=>{
        this.subcategory=res;
      },err=>{

      });
    }
}
