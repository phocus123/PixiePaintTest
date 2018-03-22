import { Component, OnInit, ViewChild } from '@angular/core';
import { Message } from '../../../models/Message';
import { UploadMessageService } from '../../../services/upload-message.service';
import { FileUpload } from '../../../models/FileUpload';
import { UploadFileService } from '../../../services/upload-file.service';

declare let Materialize;
declare let $;

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

  file1: FileUpload;
  file2: FileUpload;
  file3: FileUpload;

  @ViewChild('messageForm') form: any;

  constructor(
    private messageService: UploadMessageService,
    private service: UploadFileService
  ) {}

  ngOnInit() {
    this.service.getImages().subscribe(files => {
      for (let file of files) {
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
    });

    setTimeout(() => {
      this.initParallax();
    }, 2000);
  }

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

  initParallax() {
    $(document).ready(function() {
      $('.parallax').parallax();
    });
  }
}
