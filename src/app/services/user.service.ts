import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Profile} from '../models/Profile.model';
import {BehaviorSubject,Observable} from 'rxjs';
import{map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {
    readonly apiUrl='http://localhost:8080/user/';


  constructor(private http:HttpClient) {


  }
  getUserDetails(id:string)
  {
    return this.http.get<any>(this.apiUrl+id);
  }
   updateUserdetails(id,name,phone,email,location,picture)
   {
    const userData={
      name:name,
      phone:phone,
      email:email,
      location:location,
      picture:picture
    }
     return this.http.put<any>(this.apiUrl+'update/'+id,userData);
   }
}
