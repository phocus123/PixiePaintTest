import { Component, OnInit } from '@angular/core';

// Declaring $ as type any for using jquery within typescript.
declare let $;

@Component({
  selector: 'app-insta-feed',
  templateUrl: './insta-feed.component.html',
  styleUrls: ['./insta-feed.component.css']
})
export class InstaFeedComponent implements OnInit {
  constructor() {}

  // Upon the initializing of this component call the resizeContainer method.
  ngOnInit() {
    var winWidth = $(window).width();

    this.resizeContainer(winWidth);
  }

  // Upon the resizing of the window, ie. phone portrait to landscape, call the resizeContainer method.
  onResize() {
    var winWidth = $(window).width();

    this.resizeContainer(winWidth);
  }

  // Method for responsiveness of the instagram gallery. If window width is less than 768px then remove the container class and set padding to 0px.
  resizeContainer(winWidth) {
    if (winWidth >= 768) {
      $('#ig-feed-container').addClass('container');
      $('.ig-feed').css({ padding: '36px' });
    } else {
      $('#ig-feed-container').removeClass('container');
      $('.ig-feed').css({ padding: '0px' });
    }
  }
}
