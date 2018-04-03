import { Component, OnInit } from '@angular/core';
import { FileUpload } from '../../../models/FileUpload';
import { UploadFileService } from '../../../services/upload-file.service';

@Component({
  selector: 'list-showcase-images',
  templateUrl: './list-showcase-images.component.html',
  styleUrls: ['./list-showcase-images.component.css']
})
export class ListShowcaseImagesComponent implements OnInit {
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
