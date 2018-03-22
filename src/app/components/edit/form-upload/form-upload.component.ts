import { Component, OnInit, ViewChild } from '@angular/core';
import { UploadFileService } from '../../../services/upload-file.service';
import { FileUpload } from '../../../models/FileUpload';

declare let Materialize;

@Component({
  selector: 'form-upload',
  templateUrl: './form-upload.component.html',
  styleUrls: ['./form-upload.component.css']
})
export class FormUploadComponent implements OnInit {
  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  caption: string;
  progress: { percentage: number } = { percentage: 0 };

  @ViewChild('uploadForm') form: any;

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
    this.currentFileUpload.caption = this.caption;
    this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress);
    this.form.reset();
  }
}
