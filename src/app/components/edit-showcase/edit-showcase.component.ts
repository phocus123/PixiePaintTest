import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-showcase',
  templateUrl: './edit-showcase.component.html',
  styleUrls: ['./edit-showcase.component.css']
})
export class EditShowcaseComponent implements OnInit {
  homePage: boolean;

  constructor() {}

  ngOnInit() {
    this.homePage = false;
  }
}
