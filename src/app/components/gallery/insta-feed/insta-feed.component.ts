import { Component, OnInit } from '@angular/core';

declare let $;

@Component({
  selector: 'app-insta-feed',
  templateUrl: './insta-feed.component.html',
  styleUrls: ['./insta-feed.component.css']
})
export class InstaFeedComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    var win_width = $(window).width();

    $(document).ready(function() {
      if (win_width >= 768) {
        $('#ig-feed-container').addClass('container');
        $('.ig-feed').css({ padding: '36px' });
      } else {
        $('#ig-feed-container').removeClass('container');
        $('.ig-feed').css({ padding: '0px' });
      }
    });
  }

  onResize() {
    var win_width = $(window).width();

    if (win_width <= 768) {
      $('#ig-feed-container').removeClass('container');
      $('.ig-feed').css({ padding: '0px' });
    } else {
      $('#ig-feed-container').addClass('container');
      $('.ig-feed').css({ padding: '36px' });
    }
  }
}
