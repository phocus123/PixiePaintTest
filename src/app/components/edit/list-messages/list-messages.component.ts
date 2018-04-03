import { Component, OnInit } from '@angular/core';
import { UploadMessageService } from '../../../services/upload-message.service';
import { Message } from '../../../models/Message';

@Component({
  selector: 'list-messages',
  templateUrl: './list-messages.component.html',
  styleUrls: ['./list-messages.component.css']
})
export class ListMessagesComponent implements OnInit {
  // Declaring local variables.
  messages: any[];

  constructor(private messageService: UploadMessageService) {}

  // Upon initializing of this component, call the getMessages method from the upload-message service in order to populate the messages array.
  ngOnInit() {
    this.messageService
      .getMessages()
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
      .subscribe(messages => {
        this.messages = messages;
      });
  }
}
