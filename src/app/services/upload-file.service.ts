import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/observable';
import { FileUpload } from '../models/FileUpload';
import * as firebase from 'firebase';

// Declaring Materialize as type any for using Materialize toast within typescript.
declare let Materialize;

@Injectable()
export class UploadFileService {
  // Declaring local variables.
  files: Observable<FileUpload[]>;
  imagePath = '/images';

  constructor(private db: AngularFireDatabase) {}

  // Uploading an image to the storage server.
  pushFileToStorage(fileUpload: FileUpload, progress: { percentage: number }) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef
      .child(`${this.imagePath}/${fileUpload.file.name}`)
      .put(fileUpload.file);

    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      snapshot => {
        // In progress
        const snap = snapshot as firebase.storage.UploadTaskSnapshot;
        progress.percentage = Math.round(
          snap.bytesTransferred / snap.totalBytes * 100
        );
      },
      error => {
        // Failed.
        console.log(error);
        Materialize.toast(error, 4000, 'red');
      },
      () => {
        // Success.
        fileUpload.url = uploadTask.snapshot.downloadURL;
        fileUpload.name = fileUpload.file.name;
        this.saveFileData(fileUpload);
        Materialize.toast('File uploaded', 4000, 'green');
      }
    );
  }

  // Saving a File to the database.
  private saveFileData(fileUpload: FileUpload) {
    this.db.list(`${this.imagePath}/`).push(fileUpload);
  }

  // Getting the list of images from the database, ordered by 'name'.
  getImagesOrdered(): AngularFireList<FileUpload> {
    return this.db.list(this.imagePath, ref => ref.orderByChild('name'));
  }

  // Getting the list of images from the database.
  getImages(): Observable<FileUpload[]> {
    this.files = this.db.list<FileUpload>(this.imagePath).valueChanges();
    return this.files;
  }

  // Deleting the image from the both the storage server and the database.
  deleteFileUpload(fileUpload: FileUpload) {
    this.deleteFileDatabase(fileUpload.key)
      .then(() => {
        this.deleteFileStorage(fileUpload.name);
      })
      .catch(error => console.log(error));
  }

  // Deleting an image from the database.
  private deleteFileDatabase(key: string) {
    return this.db.list(`${this.imagePath}/`).remove(key);
  }

  // Deleting an image from the storage server.
  private deleteFileStorage(name: string) {
    const storageRef = firebase.storage().ref();
    storageRef.child(`${this.imagePath}/${name}`).delete();
  }
}
