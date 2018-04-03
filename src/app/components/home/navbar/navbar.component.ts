import { Component, OnInit } from '@angular/core';

// Declaring $ as type any for using jquery within typescript.
declare let $: any;
// Declaring Materialize as type any for using Materialize-css toasts within typescript.
declare let Materialize: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // Jquery for dynamic nav bar, hide or show depending on whether the sideNav is opened or closed.
    $('.button-collapse').sideNav({
      onOpen: function() {
        $('nav').hide();
      },
      onClose: function() {
        $('nav').show();
      }
    });

    // Jquery for closing the sideNav when a link is clicked.
    $('.ref-link').click(function() {
      $('.side-nav').sideNav('hide');
    });

    // Initializing materialize-css scrollspy.
    $('.scrollspy').scrollSpy();

    // Materialize-css scrollfire options, for displaying the relevent staggered list when the user has scrolled to the offsets position.
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
