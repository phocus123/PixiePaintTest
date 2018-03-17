import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../../models/Message';
import { UploadMessageService } from '../../../services/upload-message.service';

@Component({
  selector: 'details-message',
  templateUrl: './details-message.component.html',
  styleUrls: ['./details-message.component.css']
})
export class DetailsMessageComponent implements OnInit {
  @Input() messages: Message;

  constructor(private messageService: UploadMessageService) {}

  ngOnInit() {}

  deleteMessage(test) {
    this.messageService.deleteMessage(test);
  }
}
