import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { FileUpload } from '../../../models/FileUpload';
import { UploadFileService } from '../../../services/upload-file.service';
import { Observable } from 'rxjs/Observable';

declare let $;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [Title],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Declaring local variables.
  files: FileUpload[];
  constructor(
    private _pageTitle: Title,
    private service: UploadFileService,
    private _meta: Meta
  ) {
    // Assigning the title and meta tags for the gallery page.
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

  // Upon the initializing of this component, call the queryBrowser method and then resizeParallax.
  ngOnInit() {
    var winWidth = $(window).width();

    if (this.queryBrowser()) {
      alert(
        'Please be advised that this website is best viewed using Chrome or Firefox browsers.'
      );
      this.resizeParallax(winWidth);
    } else {
      this.resizeParallax(winWidth);
    }

    // Call getImages from the upload-file service and populate files array then inititalize the Materialize parallax 2 seconds later.
    this.service
      .getImages()
      .valueChanges()
      .subscribe(files => {
        this.files = files;
        this.initParallax();
      });
  }

  // Upon the resizing of the window, ie. phone portrait to landscape, call the resizeParallax method.
  onResize() {
    var winWidth = $(window).width();
    this.resizeParallax(winWidth);
  }

  // Method for responsiveness of the parallax, if window width is larger than 768px then show parallax-container class and hide mob-img-container class.
  resizeParallax(winWidth) {
    if (winWidth >= 768) {
      $('.mob-img-container').hide();
      $('.parallax-container').show();
    } else {
      $('.parallax-container').hide();
      $('.mob-img-container').show();
    }
  }

  // Method for checking if user is using Internet Explorer, returns a boolean.
  queryBrowser(): boolean {
    let user_agent = window.navigator.userAgent;
    let isTrident = user_agent.search('Trident/');
    let usingIE: boolean;

    if (isTrident != -1) {
      usingIE = true;
    } else {
      usingIE = false;
    }

    return usingIE;
  }

  initParallax() {
    $(document).ready(function() {
      $('.parallax').parallax();
    });
  }
}
