import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {LoginService} from '../../services/login.service';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   loginForm:FormGroup;
   returnUrl:string;
   message:string;
     constructor(private router:Router,private service:LoginService,private formBuilder:FormBuilder ,private route:ActivatedRoute) {
        if(this.service.currentUserValue)
        {
          this.router.navigate(['/panel']);
        }
      }

  ngOnInit() {
    this.createForm();
    this.returnUrl=this.route.snapshot.queryParams['returnUrl']||'/panel';
  }
  createForm()
  {
    this.loginForm=this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    });
  }
  resetForm()
  {
    this.loginForm.reset();
  }
    loginUser(email,password)
    {
       this.service.loginUser(email,password).subscribe(res=>{
         this.router.navigate([this.returnUrl]);
         this.resetForm();
       },err=>{
         this.resetForm();
         this.message="Invalid email or password";
       });
    }
}
