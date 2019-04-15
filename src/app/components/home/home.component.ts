import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {MessagingService} from '../../services/messaging.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   userAuthenticated=false;
   private tmessage:any;
  constructor(private service:LoginService,private mService:MessagingService) {
    if(this.service.currentUserValue)
    {
      this.userAuthenticated=true;
      const id=this.service.currentUserValue.id;
      window.setInterval(()=>this.getMessages(id),5);

    }
  }

  ngOnInit() {

  }
    getMessages(id):any
    {
      this.mService.getMessageCount(id).subscribe(res=>{
        this.tmessage=res.result;
      });
    }
}
