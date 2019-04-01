import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from'../../services/login.service';
import {UserService} from '../../services/user.service';
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
   details:any;
   status=true;
  constructor(private router:Router,private service:LoginService,private uservice:UserService) {

   }

  ngOnInit() {
    this.generateId();
  }
   logout()
   {
     this.service.logout();
  this.router.navigate(['/login']);
   }
   generateId()
   {
     const id =this.service.currentUserValue.id;
     console.log(id);
     this.generateDetails(id);

   }
  generateDetails(id)
   {
     this.uservice.getUserDetails(id).subscribe(res=>{
        this.details=res;
        this.getStatus(res);
     });
   }
   getStatus(res)
   {
     if(res.user.Status=="false")
     {
       this.status=false;
     }
     else
     {
       this.status=true;
     }
   }
}
