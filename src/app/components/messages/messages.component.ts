import { Component, OnInit } from '@angular/core';
import {MessagingService} from '../../services/messaging.service';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor( private service:MessagingService) { }

  ngOnInit() {
  }

}
