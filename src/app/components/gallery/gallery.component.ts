import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  constructor(_pageTitle: Title, _meta: Meta) {
    _pageTitle.setTitle('Pixie Paint Perth | Gallery');
    _meta.addTags([
      {
        name: 'keywords',
        content:
          'pixie paint, pixie paint perth, @pixiepaintperth, pixie paint perth instagram'
      },
      {
        name: 'description',
        content:
          'Gallery for Pixie Paint, view more on our instagram - @pixiepaintperth'
      }
    ]);
  }

  ngOnInit() {}
}
