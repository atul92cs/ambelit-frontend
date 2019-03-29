import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
   readonly apiUrl="http://localhost:8080/user/";
  constructor(private http:HttpClient) { }
  registerUser(name,email,password)
  {
    const userData={
      name:name,
      email:email,
      password:password
    }
    return this.http.post<any>(this.apiUrl+'register',userData);
  }
}
