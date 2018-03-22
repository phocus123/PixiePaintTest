import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/observable';
import { FileUpload } from '../models/FileUpload';

import * as firebase from 'firebase';
declare let Materialize;

@Injectable()
export class UploadFileService {
  files: Observable<FileUpload[]>;
  imagePath = '/images';

  constructor(private db: AngularFireDatabase) {}

  /* Uploading an Image to the Storage Server */
  pushFileToStorage(fileUpload: FileUpload, progress: { percentage: number }) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef
      .child(`${this.imagePath}/${fileUpload.file.name}`)
      .put(fileUpload.file);

    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      snapshot => {
        // in progress
        const snap = snapshot as firebase.storage.UploadTaskSnapshot;
        progress.percentage = Math.round(
          snap.bytesTransferred / snap.totalBytes * 100
        );
      },
      error => {
        // fail
        console.log(error);
        Materialize.toast(error, 4000, 'red');
      },
      () => {
        // success
        fileUpload.url = uploadTask.snapshot.downloadURL;
        fileUpload.name = fileUpload.file.name;
        this.saveFileData(fileUpload);
        Materialize.toast('File uploaded', 4000, 'green');
      }
    );
  }

  /* Saving the File to the Base Location. */
  private saveFileData(fileUpload: FileUpload) {
    this.db.list(`${this.imagePath}/`).push(fileUpload);
  }

  /* Getting the List of Images for the File Uploads */
  getFileUploads(): AngularFireList<FileUpload> {
    return this.db.list(this.imagePath, ref => ref.orderByChild('name'));
  }

  /* Getting the Images from the Server */
  getImages(): Observable<FileUpload[]> {
    this.files = this.db.list<FileUpload>(this.imagePath).valueChanges();
    return this.files;
  }

  /* Removing the Image Storage Bucket */
  deleteFileUpload(fileUpload: FileUpload) {
    this.deleteFileDatabase(fileUpload.key, this.imagePath)
      .then(() => {
        this.deleteFileStorage(fileUpload.name, this.imagePath);
      })
      .catch(error => console.log(error));
  }

  /* Deleting an Image from the List */
  private deleteFileDatabase(key: string, imagePath: string) {
    return this.db.list(`${imagePath}/`).remove(key);
  }

  /* Removing the Storage Location. */
  private deleteFileStorage(name: string, imagePath: string) {
    const storageRef = firebase.storage().ref();
    storageRef.child(`${imagePath}/${name}`).delete();
  }
}
