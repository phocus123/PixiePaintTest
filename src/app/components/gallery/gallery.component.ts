import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  homePage: boolean;

  constructor() {}

  ngOnInit() {
    this.homePage = false;
  }
}
