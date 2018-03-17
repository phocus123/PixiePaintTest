import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/observable';

import { Message } from '../models/Message';

@Injectable()
export class UploadMessageService {
  private messagePath: string = '/messages';

  constructor(private db: AngularFireDatabase) {}

  saveMessageData(message: Message) {
    this.db.list(`${this.messagePath}/`).push(message);
  }
}
