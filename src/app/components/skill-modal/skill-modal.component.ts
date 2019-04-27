import { Component, OnInit,Inject } from '@angular/core';
import {SkillService} from '../../services/skill.service';
import {SubcategoryService} from '../../services/subcategory.service';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-skill-modal',
  templateUrl: './skill-modal.component.html',
  styleUrls: ['./skill-modal.component.css']
})
export class SkillModalComponent implements OnInit {
   user:any;
   skills:any;
   updateSkill:FormGroup;
  constructor(private service:SkillService,private subService:SubcategoryService,public skillDialogRef:MatDialogRef<SkillModalComponent>,@Inject(MAT_DIALOG_DATA)public data:string,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.generateSkills();
    this.createForm();
    this.generarateUserinfo(this.data);


  }
    generateSkills()
    {
       this.subService.getSubcategory().subscribe(res=>{
         this.skills=res;

       },err=>{

       });
    }
    createForm()
    {
      this.updateSkill=this.formBuilder.group({
        id:['',Validators.required],
        skill:['',Validators.required]
      });
    }
    generarateUserinfo(data)
    {
      this.service.getuserSkill(data).subscribe(res=>{
        this.updateSkill.setValue({
          id:res.skill.id,
          skill:res.skill.Skill
        });
      },err=>{

      });
    }
    resetForm()
    {
      this.updateSkill.reset();
    }
    cancelUpdate()
    {
      this.skillDialogRef.close();
    }
    updateuserSkill(id,skill)
    {
      this.service.updateSkill(id,skill).subscribe(res=>{
        this.skillDialogRef.close();
        this.resetForm();
      },err=>{

      });

    }
}
