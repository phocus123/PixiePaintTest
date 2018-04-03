import { Component, OnInit } from '@angular/core';

// Declaring $ as type any for using jquery within typescript.
declare let $;

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  constructor() {}

  // Initializing the Materialize collapsible using jquery.
  ngOnInit() {
    $('.collapsible').collapsible();
  }
}
