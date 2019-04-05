import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MessagingService {
   readonly apiUrl='http://localhost:8080/';
   private socket;
  constructor() {
    this.socket=io(this.apiUrl);
   }

}
