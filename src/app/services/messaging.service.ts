import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MessagingService {
   readonly apiUrl='http://localhost:8080/';
   private socket;
  constructor(private http:HttpClient) {
    this.socket=io(this.apiUrl);
   }
    getMessageCount(rid:any)
    {
      return this.http.get<any>(this.apiUrl+'message/'+rid);
    }
}
