import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  providers: [Title],
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  constructor(private _pageTitle: Title) {
    // Setting page title.
    this._pageTitle.setTitle('Whoops...');
  }

  ngOnInit() {}
}
