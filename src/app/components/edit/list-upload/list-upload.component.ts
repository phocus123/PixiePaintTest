import { Component, OnInit } from '@angular/core';

import { FileUpload } from '../../../models/FileUpload';
import { UploadFileService } from '../../../services/upload-file.service';

@Component({
  selector: 'list-upload',
  templateUrl: './list-upload.component.html',
  styleUrls: ['./list-upload.component.css']
})
export class ListUploadComponent implements OnInit {
  fileUploads: any[];

  constructor(private uploadService: UploadFileService) {}

  ngOnInit() {
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
