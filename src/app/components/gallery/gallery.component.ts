import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  // Assigning the title and meta tags for the gallery page.
  constructor(_pageTitle: Title) {
    _pageTitle.setTitle('Pixie Paint Perth | Gallery');
  }

  ngOnInit() {}
}
