import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FileUpload } from '../../../models/FileUpload';
import { UploadFileService } from '../../../services/upload-file.service';
declare let $;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [Title],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private _pageTitle: Title, private service: UploadFileService) {
    this._pageTitle.setTitle('Fun for Little Pixies | Pixie Paint Perth');
  }

  ngOnInit() {
    $(document).ready(function() {
      if ($(window).width() >= 768) {
        $('.mob-img-container').hide();
        $('.parallax-container').show();
      } else {
        $('.parallax-container').hide();
        $('.mob-img-container').show();
      }
    });
  }

  onResize() {
    if ($(window).width() >= 768) {
      $('.parallax-container').show();
      $('.mob-img-container').hide();
    } else {
      $('.parallax-container').hide();
      $('.mob-img-container').show();
    }
  }
}
