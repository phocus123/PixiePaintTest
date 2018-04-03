import { Component, OnInit, Input } from '@angular/core';
import { FileUpload } from '../../../models/FileUpload';
import { UploadFileService } from '../../../services/upload-file.service';

@Component({
  selector: 'details-upload',
  templateUrl: './details-upload.component.html',
  styleUrls: ['./details-upload.component.css']
})
export class DetailsUploadComponent implements OnInit {
  @Input() fileUpload: FileUpload;

  constructor(private uploadService: UploadFileService) {}

  ngOnInit() {}

  // Local method for calling the delete file function from the upload-file service.
  deleteFileUpload(fileUpload) {
    this.uploadService.deleteFileUpload(fileUpload);
  }
}
