import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../../../services/upload-file.service';

@Component({
  selector: 'list-all-images',
  templateUrl: './list-all-images.component.html',
  styleUrls: ['./list-all-images.component.css']
})
export class ListAllImagesComponent implements OnInit {
  // Declaring local variables.
  fileUploads: any[];

  constructor(private uploadService: UploadFileService) {}

  // Upon initializing of this component, call the getFileUploads method from the upload-file service in order to populate the fileUploads array.
  ngOnInit() {
    this.uploadService
      .getImagesOrdered()
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
      .subscribe(fileUploads => {
        this.fileUploads = fileUploads;
      });
  }
}
