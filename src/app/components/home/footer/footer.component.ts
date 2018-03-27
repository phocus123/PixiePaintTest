import { Component, OnInit } from '@angular/core';
declare let $;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  private linkedIn_A: string = '<a href="https://www.linkedin.com/in/ashleigh-clark-956240123/" class="black-text">Ashleigh Clark</a>';
  private linkedIn_M: string = '<a href="https://www.linkedin.com/in/markschafers" class="black-text">Mark Schafers &&nbsp;</a>';
  constructor() {}

  ngOnInit() {
    this.scrollToTop();

    $(document).ready(function() {
      if ($(window).width() >= 1080) {
        $('#ig-feed-container').addClass('container');
        $('.ig-feed').css({ padding: '36px' });
      } else {
        $('#ig-feed-container').removeClass('right');
        $('.ig-feed').css({ padding: '0px' });
      }
    });
  }

  scrollToTop() {
    $('#footerButton').click(function() {
      // Animate Movement to the Top of the Page.
      $('html body').animate({ scrollTop: 0 }, 500, 'swing');
      // Stop Animation.
      $('html body').stop();
    });
  }
}
