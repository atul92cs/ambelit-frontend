import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/User.model';
import {BehaviorSubject,Observable} from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
    readonly apiUrl='http://localhost:8080/user/login';
    private currentUserSubject:BehaviorSubject<User>;
    private curreUser:Observable<User>;
    isAuthenticated=false;
  constructor(private http:HttpClient) {
      this.currentUserSubject=new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
      this.curreUser=this.currentUserSubject.asObservable();
  }
  public get currentUserValue():User
  {
    return this.currentUserSubject.value;
  }
   public get getAuthenthicated()
  {
    return this.isAuthenticated;
  }
  loginUser(email,password)
  {
    const loginData={
      email:email,
      password:password
    }
    return this.http.post<any>(this.apiUrl,loginData).pipe(map(user=>{
      if(user && user.token)
      {
        localStorage.setItem('currentUser',JSON.stringify(user));
        this.currentUserSubject.next(user);
        this.isAuthenticated=true;
      }
      return user;
    }));
  }
  logout()
  {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.isAuthenticated=false;
  }
}
