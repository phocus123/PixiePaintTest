import { Component, OnInit, ViewChild } from '@angular/core';
import { Message } from '../../../models/Message';
import { UploadMessageService } from '../../../services/upload-message.service';
import { FileUpload } from '../../../models/FileUpload';
import { UploadFileService } from '../../../services/upload-file.service';

// Declaring Materialize as type any for using Materialize-css toasts within typescript.
declare let Materialize;
// Declaring $ as type any for using jquery within typescript.
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

  file1: FileUpload;
  file2: FileUpload;
  file3: FileUpload;

  // Using ViewChild to assign a local variable to the DOM form element.
  @ViewChild('messageForm') form: any;

  constructor(
    private messageService: UploadMessageService,
    private service: UploadFileService
  ) {}

  // Upon the initializing of this component call the getImages method from the upload-file service, to assign the file variables.
  ngOnInit() {
    this.service.getImages().subscribe(files => {
      for (let file of files) {
        // If statements to ensure the order of images stays consistent regardless of position in the database.
        if (file.name == 'showcase3.jpg') {
          this.file1 = file;
        }
        if (file.name == 'showcase4.jpg') {
          this.file2 = file;
        }
        if (file.name == 'showcase5.jpg') {
          this.file3 = file;
        }
      }
      this.initParallax();
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

  // Initializing the Materialize parallax using jquery.
  initParallax() {
    $('.parallax').parallax();
  }
}
