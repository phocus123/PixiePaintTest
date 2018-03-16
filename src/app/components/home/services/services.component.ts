import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $(document).ready(function() {
      $('.parallax').parallax();
    });
  }
}
