import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Message } from '../../../models/Message';
import { UploadMessageService } from '../../../services/upload-message.service';
import { FileUpload } from '../../../models/FileUpload';

// Declaring Materialize as type any for using Materialize-css toasts within typescript.
declare let Materialize;
declare let $;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  // Declaring local variables.
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  messageContent: string;
  html: string;

  // Declaring a local variable of type FileUpload array that is passed data from the home component.
  @Input() files: FileUpload[];

  // Using ViewChild to assign a local variable to the DOM form element.
  @ViewChild('messageForm') form: any;

  constructor(private messageService: UploadMessageService) {}

  ngOnInit() {
    $(document).ready(function() {
      $('.slider').slider({
        height: 250
      });
      // $('.slider').slider('pause');
    });
  }

  // Submitting the contact form details, which is then added to the Firebase database.
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
