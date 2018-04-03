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
  // Declaring local variables.
  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  caption: string;
  progress: { percentage: number } = { percentage: 0 };

  // Using ViewChild to assign local variables from DOM elements and their selectors.
  @ViewChild('uploadForm') form: any;
  @ViewChild('inputFile') formFile: any;
  @ViewChild('inputFileName') formFileName: any;

  constructor(private uploadService: UploadFileService) {}

  ngOnInit() {}

  // Method for selecting a file that is called from the HTML, includes validation for an image file type.
  selectFile(event) {
    const file = event.target.files.item(0);

    // If file type is a match, assign the selectedFiles variable.
    if (file.type.match('image.*')) {
      this.selectedFiles = event.target.files;
    } else {
      alert('Invalid format!');
    }
  }

  // Method for uploading a file to both Firebase storage and RTDB.
  upload() {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;

    this.currentFileUpload = new FileUpload(file);
    this.currentFileUpload.caption = this.caption;
    this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress);
    this.resetForm();
  }

  // Method for resetting all the upload forms, necesarry DOM elements.
  resetForm() {
    this.form.reset();
    this.formFile.nativeElement.value = '';
    this.formFileName.nativeElement.value = '';
  }
}
