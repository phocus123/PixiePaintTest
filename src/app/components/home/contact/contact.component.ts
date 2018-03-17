import { Component, OnInit, ViewChild } from '@angular/core';
import { Message } from '../../../models/Message';
import { UploadMessageService } from '../../../services/upload-message.service';

declare let Materialize;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  messageContent: string;
  html: string;

  @ViewChild('messageForm') form: any;

  constructor(private messageService: UploadMessageService) {}

  ngOnInit() {}

  onSubmit({ value }: { value: Message }) {
    value.html = `
       <div>From: ${value.firstName.concat(' ' + value.lastName)}</div>
       <div>Email: <a href="mailto:${value.email}">${value.email}</a></div>
       <div>Telephone: ${value.telephone}</div>
       <div>Message: ${value.messageContent}</div>
       `;
    this.messageService.saveMessageData(value);
    Materialize.toast('Message Sent!', 4000, 'deep-purple accent-1');
    this.form.reset();
  }
}
