import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FileUpload } from '../../../models/file-upload';
import { UploadFileService } from '../../../services/upload-file.service';

declare let $: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  files: FileUpload[];

  constructor(private service: UploadFileService) {}

  ngOnInit() {
    this.service.getImages().subscribe(files => (this.files = files));

    $(document).ready(function() {
      setTimeout(initiateSlider, 3000);
    });

    function initiateSlider() {
      $('.slider').slider({
        indicators: false,
        height: $(window).height()
      });

      $('.main-loader').toggleClass();
      $('.loader-container').toggleClass();
      $('.preloader-wrapper').toggleClass();
      $('.modal').modal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: 90, // Opacity of modal background
        endingTop: '30%' // Ending top style attribute
      });
    }
  }
}
