import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from'../../services/login.service';
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor(private router:Router,private service:LoginService) {

   }

  ngOnInit() {
  }
   logout()
   {
     this.service.logout();
  this.router.navigate(['/login']);
   }
}
