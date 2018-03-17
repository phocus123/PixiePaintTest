import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/observable';

import { Message } from '../models/Message';

@Injectable()
export class UploadMessageService {
  private messagePath: string = '/messages';
  messages: Observable<Message[]>;

  constructor(private db: AngularFireDatabase) {}

  // Get list of messages from database.
  getMessages(): AngularFireList<Message> {
    return this.db.list(this.messagePath);
  }

  // Save message to firebase database.
  saveMessageData(message: Message) {
    this.db.list(`${this.messagePath}/`).push(message);
  }

  // Delete a message.
  deleteMessage(key: string) {
    return this.db.list(`${this.messagePath}/`).remove(key);
  }
}
