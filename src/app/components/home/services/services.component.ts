import { Component, OnInit } from '@angular/core';
import { FileUpload } from '../../../models/FileUpload';
import { UploadFileService } from '../../../services/upload-file.service';

// Declaring $ as type any for using jquery within typescript.
declare let $: any;

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  // Declaring local variables.
  file: FileUpload;

  constructor(private service: UploadFileService) {}

  // Upon the initializing of this component call the getImages method from the upload-file service, to assign the file variable.
  ngOnInit() {
    this.service.getImages().subscribe(files => {
      for (let file of files) {
        // If statement to ensure the order of images stays consistent regardless of position in the database.
        if (file.name == 'showcase2.jpg') {
          this.file = file;
        }
      }
      this.initParallax();
    });
  }

  initParallax() {
    $('.parallax').parallax();
  }
}
