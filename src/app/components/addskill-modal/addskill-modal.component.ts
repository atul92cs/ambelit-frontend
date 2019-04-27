import { Component, OnInit,Inject } from '@angular/core';
import {SubcategoryService} from '../../services/subcategory.service';
import {SkillService} from '../../services/skill.service';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-addskill-modal',
  templateUrl: './addskill-modal.component.html',
  styleUrls: ['./addskill-modal.component.css']
})
export class AddskillModalComponent implements OnInit {
   id:any;
   addskill:FormGroup;
   skills:any;
  constructor(private service:SubcategoryService,private skService:SkillService,private formBuilder:FormBuilder,public addskillRef:MatDialogRef<AddskillModalComponent>,@Inject(MAT_DIALOG_DATA) public data:string) { }

  ngOnInit() {
    this.generateSkills();
    this.id=this.data;
    this.createForm();
  }
  generateSkills()
  {
    this.service.getSubcategory().subscribe(res=>{
      this.skills=res;
    },err=>{

    });
  }
  createForm()
  {
    this.addskill=this.formBuilder.group({
      skill:['',Validators.required]
    });
  }
  addSkill(skill)
  {
    this.skService.addskills(this.id,skill).subscribe(res=>{
    this.addskillRef.close();
    },err=>{

    });
  }
}
