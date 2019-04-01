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

}
