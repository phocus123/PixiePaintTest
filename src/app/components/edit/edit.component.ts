import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  homePage: boolean;

  constructor() {}

  ngOnInit() {
    this.homePage = false;
  }
}
