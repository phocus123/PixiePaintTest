import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-navbar-two',
  templateUrl: './navbar-two.component.html',
  styleUrls: ['./navbar-two.component.css']
})
export class NavbarTwoComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $('button-collapse').sideNav();
  }
}
