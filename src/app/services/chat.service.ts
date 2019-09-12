import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from 'rxjs';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
@Injectable()
export class ChatService {
    private socket=io('http://localhost:8080/');
    getOnline(data)
    {
       this.socket.emit('user_online',data);
    }
    sendMessage(data)
    {
        this.socket.emit('message_sent',data);
    }
    recieveMessage(data)
    {
       let observable=new Observable<{user:String,message:String}>(observer=>{
           this.socket.on('new_message',(data)=>{
               observer.next(data);
           });
           return ()=>{this.socket.dissconnect();}
       });
       return observable;
    }
}