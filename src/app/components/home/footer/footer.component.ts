import { Component, OnInit } from '@angular/core';
declare let $;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  linkedIn_A: string = 'https://www.linkedin.com/in/ashleigh-clark-956240123/';
  linkedIn_M: string = 'https://www.linkedin.com/in/markschafers';

  constructor() {}

  ngOnInit() {
    this.scrollToTop();
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
