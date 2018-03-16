import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $(document).ready(function() {
      $('.parallax').parallax();
    });
  }
}
