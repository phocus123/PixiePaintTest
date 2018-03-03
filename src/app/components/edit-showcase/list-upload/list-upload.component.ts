import { Component, OnInit } from '@angular/core';

import { FileUpload } from '../../../models/file-upload';
import { UploadFileService } from '../../../services/upload-file.service';

@Component({
  selector: 'list-upload',
  templateUrl: './list-upload.component.html',
  styleUrls: ['./list-upload.component.css']
})
export class ListUploadComponent implements OnInit {
  fileUploads: any[];

  constructor(private uploadService: UploadFileService) {
    console.log('test');
  }

  ngOnInit() {
    // Use snapshotChanges().map() to store the key
    this.uploadService
      .getFileUploads()
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
      .subscribe(fileUploads => {
        this.fileUploads = fileUploads;
      });
  }
}
