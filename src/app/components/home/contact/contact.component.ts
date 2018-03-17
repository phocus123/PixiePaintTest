import { Component, OnInit } from '@angular/core';
import { Message } from '../../../models/message';
import { UploadMessageService } from '../../../services/upload-message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  message: Message;

  firstName: string;
  lastName: string;
  telephone: string;
  email: string;
  messageContent: string;

  constructor(private messageService: UploadMessageService) {}

  ngOnInit() {}

  onSubmit() {
    this.message = {
      firstName: this.firstName,
      lastName: this.lastName,
      telephone: this.telephone,
      email: this.email,
      messageContent: this.messageContent
    };

    this.messageService.saveMessageData(this.message);
  }
}
