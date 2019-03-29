import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   userAuthenticated=false;
  constructor(private service:LoginService) {
    if(this.service.currentUserValue)
    {
      this.userAuthenticated=true;
    }
  }

  ngOnInit() {

  }

}
