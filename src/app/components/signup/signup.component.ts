import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {RegisterService} from '../../services/register.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    registerForm:FormGroup;
    isCompleted=false;
    message:any;
  constructor(private service:RegisterService,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }
   createForm()
   {
     this.registerForm=this.formBuilder.group({
       name:[null,Validators.required,Validators.pattern(/^[A-Za-z\s]+$/)],
       email:[null,Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)],
       password:[null,Validators.required]
     });
   }
   resetForm()
   {
     this.registerForm.reset();
   }
   registerUser(name,email,password)
   {
        if(name.invalid||email.invalid||password.invalid)
        {
          this.message="invalid details"
        }
        else{
       this.service.registerUser(name,email,password).subscribe(res=>{

            this.message="User registered";
            this.resetForm();
       },err=>{

         this.message="Error occured";
         this.resetForm();
       });

   }
 }
}
