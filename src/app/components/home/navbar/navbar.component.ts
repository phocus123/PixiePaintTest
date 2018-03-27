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
    $('.button-collapse').sideNav({
      onOpen: function(el) {
        $('nav').hide();
      },
      onClose: function(el) {
        $('nav').show();
      }
    });

    $('.ref-link').click(function() {
      $('.side-nav').sideNav('hide');
    });

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
        selector: '.testimonial-selector',
        offset: 200,
        callback: function(el) {
          Materialize.showStaggeredList($(el));
        }
      },
      {
        selector: '.contact-selector',
        offset: 220,
        callback: function(el) {
          Materialize.showStaggeredList($(el));
        }
      }
    ];
    Materialize.scrollFire(options);
  }
}
