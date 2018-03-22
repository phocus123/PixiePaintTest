import { Component, OnInit } from '@angular/core';
import { FileUpload } from '../../../models/FileUpload';
import { UploadFileService } from '../../../services/upload-file.service';

declare let $: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  file: FileUpload;

  constructor(private service: UploadFileService) {}

  ngOnInit() {
    this.service.getImages().subscribe(files => {
      for (let file of files) {
        if (file.name == 'showcase1.jpg') {
          this.file = file;
        }
      }
    });

    setTimeout(() => {
      this.initParallax();
    }, 2000);
  }

  initParallax() {
    $(document).ready(function() {
      $('.parallax').parallax();
    });
  }
}
