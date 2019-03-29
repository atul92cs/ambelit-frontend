import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from '../services/login.service';
@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private service:Loginservice,router:Router)
  {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    const currentUser=this.service.currentUserValue;
    if(currentUser)
    {
      return true;
    }
    this.router.navigate(['/login'],{queryParams:{returnUrl:state.url}});
    return false;
  }
}
