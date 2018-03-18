import { Component, OnInit } from '@angular/core';
import { InstagramService } from '../../../services/instagram.service';

@Component({
  selector: 'app-insta-feed',
  templateUrl: './insta-feed.component.html',
  styleUrls: ['./insta-feed.component.css']
})
export class InstaFeedComponent implements OnInit {
  dataArray: any;

  constructor(private insta: InstagramService) {}

  ngOnInit() {
    this.insta.getData().subscribe(data => {
      this.dataArray = data.data;
    });
  }
}
