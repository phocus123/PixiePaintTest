import { Component, OnInit } from '@angular/core';

import { UploadFileService } from '../../../services/upload-file.service';
import { FileUpload } from '../../../models/FileUpload';

@Component({
  selector: 'form-upload',
  templateUrl: './form-upload.component.html',
  styleUrls: ['./form-upload.component.css']
})
export class FormUploadComponent implements OnInit {
  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  captionTitle: string;
  captionBody: string;
  progress: { percentage: number } = { percentage: 0 };

  constructor(private uploadService: UploadFileService) {}

  ngOnInit() {}

  selectFile(event) {
    const file = event.target.files.item(0);

    if (file.type.match('image.*')) {
      this.selectedFiles = event.target.files;
    } else {
      alert('invalid format!');
    }
  }

  upload() {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;

    this.currentFileUpload = new FileUpload(file);
    this.currentFileUpload.captionTitle = this.captionTitle;
    this.currentFileUpload.captionBody = this.captionBody;
    this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress);
  }
}
