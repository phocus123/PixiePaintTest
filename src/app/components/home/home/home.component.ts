import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
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
  constructor(
    private _pageTitle: Title,
    private service: UploadFileService,
    private _meta: Meta
  ) {
    _pageTitle.setTitle('Fun for Little Pixies | Pixie Paint Perth');
    _meta.addTags([
      {
        name: 'keywords',
        content:
          'pixie paint, facepainting perth, craft activities perth, parties perth, characters perth, activations perth, events perth, spruikers perth'
      },
      {
        name: 'description',
        content:
          'Perth based company specialising in face painting, craft activies, parties, characters, events and activations and spruikers and mcing'
      }
    ]);
  }

  ngOnInit() {
    $(document).ready(function() {
      let user_agent = window.navigator.userAgent;
      let isTrident = user_agent.search('Trident/');
      let usingIE: boolean;

      if (isTrident != -1) {
        usingIE = true;
      } else {
        usingIE = false;
      }

      if (usingIE) {
        alert(
          'Please be advised that this website is best viewed using Chrome or Firefox browsers.'
        );
        $('.parallax-container').hide();
        $('.mob-img-container').show();
      } else {
        if ($(window).width() >= 768) {
          $('.mob-img-container').hide();
          $('.parallax-container').show();
        } else {
          $('.parallax-container').hide();
          $('.mob-img-container').show();
        }
      }
    });
  }

  onResize() {
    let user_agent = window.navigator.userAgent;
    let isTrident = user_agent.search('Trident/');
    let usingIE: boolean;

    if (isTrident != -1) {
      usingIE = true;
    } else {
      usingIE = false;
    }

    if (usingIE) {
      alert(
        'Please be advised that this website is best viewed using Chrome or Firefox browsers.'
      );
      $('.parallax-container').hide();
      $('.mob-img-container').show();
    } else {
      if ($(window).width() >= 768) {
        $('.mob-img-container').hide();
        $('.parallax-container').show();
      } else {
        $('.parallax-container').hide();
        $('.mob-img-container').show();
      }
    }
  }
}
