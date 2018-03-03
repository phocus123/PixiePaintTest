import { Component, OnInit } from '@angular/core';
declare let $: any;
declare let Materialize: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $('.button-collapse').sideNav();

    $(document).ready(function() {
      $('.scrollspy').scrollSpy();
    });

    const options = [
      {
        selector: '.about-selector',
        offset: 150,
        callback: function(el) {
          Materialize.showStaggeredList($(el));
        }
      },
      {
        selector: '.service-selector',
        offset: 155,
        callback: function(el) {
          Materialize.showStaggeredList($(el));
        }
      },
      {
        selector: '.contact-selector',
        offset: 265,
        callback: function(el) {
          Materialize.showStaggeredList($(el));
        }
      },
      {
        selector: '.navbar-fixed',
        offset: 1920,
        callback: function() {
          $('nav').removeClass('transparent');
          $('nav').addClass('blue-grey darken-3');
        }
      }
    ];
    Materialize.scrollFire(options);
  }
}
